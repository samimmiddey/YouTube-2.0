import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorCard from '../UI/ErrorCard';
import { fetchData } from '../../Helpers/api';
import ChannelBanner from './ChannelBanner';
import ChannelAbout from './ChannelAbout';
import ChannelTabs from './ChannelTabs';
import { useReactContext } from '../../context/ContextProvider';
import VideoGridWrapper from '../Layout/VideoGridWrapper';
import ChannelBannerSkeleton from './ChannelBannerSkeleton';
import FeedVideoCard from '../UI/FeedVideoCard';
import FeedVideoCardSkeleton from '../UI/FeedVideoCardSkeleton';
import WrongParamError from '../UI/WrongParamError';

const ChannelFeed = () => {
   const { activeTab } = useReactContext();
   const [channelDetails, setChannelDetails] = useState(null);
   const [channelVideos, setChannelVideos] = useState([]);
   const [error, setError] = useState('');

   const route = useRouter();
   const { channelID } = route.query;

   useEffect(() => {
      setChannelDetails(null);
      setChannelVideos([]);
      const controller = new AbortController();

      if (route.isReady) {
         fetchData(`channels?part=snippet,statistics&id=${channelID}`, { signal: controller.signal })
            .then(data => setChannelDetails(data.items[0]))
            .catch(error => setError(error.message))
         fetchData(`search?channelId=${channelID}&part=snippet&order=date`, { signal: controller.signal })
            .then(data => setChannelVideos(data.items))
            .catch(error => setError(error.message))
      }

      return () => {
         controller.abort();
      }
   }, [channelID, route.isReady]);

   if (!channelDetails && !channelVideos) {
      return <WrongParamError message='This channel does not exist' />
   };

   if (error) {
      return <ErrorCard message={error} />
   };


   let skeletonCards = Array(48).fill(0);

   return (
      <>
         <Head>
            <title>{channelDetails ? `${channelDetails.snippet.title} - YouTube` : 'YouTube'}</title>
         </Head>
         {
            channelDetails ?
               <ChannelBanner channelDetails={channelDetails} /> :
               <ChannelBannerSkeleton />
         }
         <Box className='container'>
            <ChannelTabs />
            <VideoGridWrapper>
               {
                  (!channelDetails && channelVideos.length === 0) ? (
                     (activeTab === 'one' && (
                        skeletonCards.map((item, index) => (
                           <FeedVideoCardSkeleton key={index} />
                        )))
                     )) : (
                     activeTab === 'one' && (
                        channelVideos.map((video, index) => (
                           <Box
                              key={index}
                              sx={theme => ({
                                 [theme.breakpoints.down('sm')]: {
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                 }
                              })}
                           >
                              <FeedVideoCard
                                 data={video}
                                 index={index}
                              />
                           </Box>
                        ))
                     )
                  )
               }
            </VideoGridWrapper>
            {activeTab === 'two' && <ChannelAbout data={channelDetails} />}
         </Box>
      </>
   );
};

export default ChannelFeed;
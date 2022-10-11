import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box } from '@mui/material';
import { fetchData } from '../../Helpers/api';
import RelatedVideos from './RelatedVideos';
import WatchDetails from './WatchDetails';
import WatchDetailsSkeleton from './WatchDetailsSkeleton';
import RelatedVideoSkeleton from './RelatedVideoSkeleton';
import ErrorCard from '../UI/ErrorCard';
import WrongParamError from '../UI/WrongParamError';

const WatchFeed = () => {
   const [video, setVideo] = useState(null);
   const [channel, setChannel] = useState(null);
   const [related, setRelated] = useState([]);
   const [error, setError] = useState('');

   const route = useRouter();
   const { videoID } = route.query;

   useEffect(() => {
      setVideo(null);
      setRelated([]);
      const controller = new AbortController();

      if (route.isReady) {
         fetchData(`videos?part=snippet,statistics&id=${videoID}`, { signal: controller.signal })
            .then(data => setVideo(data.items[0]))
            .catch(error => setError(error.message))
         fetchData(`search?part=snippet&relatedToVideoId=${videoID}&type=video`, { signal: controller.signal })
            .then(data => setRelated(data.items))
            .catch(error => setError(error.message))
      }

      return () => {
         controller.abort();
      }
   }, [videoID, route.isReady]);

   useEffect(() => {
      setChannel(null);
      const controller = new AbortController();

      if (video) {
         fetchData(`channels?part=snippet,statistics&id=${video.snippet.channelId}`, { signal: controller.signal })
            .then(data => setChannel(data.items[0]))
            .catch(error => setError(error.message))
      }

      return () => {
         controller.abort();
      }
   }, [video]);

   if (error) {
      return <ErrorCard message={error} />
   };

   if (!video && !channel && !related) {
      return <WrongParamError message='This video does not exist!' />
   };

   return (
      <>
         <Head>
            <title>{video ? `${video.snippet.title} - YouTube` : 'YouTube'}</title>
         </Head>
         <Box className='container'>
            <Box
               sx={theme => ({
                  display: 'grid',
                  gridTemplateColumns: '9fr 3fr',
                  columnGap: '1.5rem',
                  [theme.breakpoints.down('lg')]: {
                     gridTemplateColumns: 'none'
                  }
               })}
            >
               {(!video && !channel && related.length === 0 &&
                  <>
                     <WatchDetailsSkeleton />
                     <RelatedVideoSkeleton />
                  </>
               )}
               {(video && channel && related.length >= 1) &&
                  <>
                     <WatchDetails
                        data={video}
                        videoID={video.id}
                        channelData={channel}
                     />
                     <RelatedVideos relatedVideos={related} />
                  </>
               }
            </Box>
         </Box>
      </>
   );
};

export default WatchFeed;
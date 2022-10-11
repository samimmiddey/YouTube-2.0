import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import { fetchData } from '../../Helpers/api';
import ErrorCard from '../UI/ErrorCard';
import VideoGridWrapper from '../Layout/VideoGridWrapper';
import FeedVideoCard from '../UI/FeedVideoCard';
import FeedVideoCardSkeleton from '../UI/FeedVideoCardSkeleton';
import { TagItems } from '../Data/data';

const HomeFeed = ({ category }) => {
   const [videoData, setVideoData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      setLoading(true);
      const controller = new AbortController();

      fetchData(`search?part=snippet&q=${category}`, { signal: controller.signal })
         .then((data) => setVideoData(data.items))
         .catch((error) => setError(error.message))
         .finally(() => setLoading(false))

      return () => {
         controller.abort();
      }
   }, [category]);

   if (error) {
      return <ErrorCard message={error} />
   }

   let skeletonCards = Array(48).fill(0);

   let headerText;
   if (category) {
      headerText = category.charAt(0).toUpperCase() + category.slice(1) + ' - YouTube';
   }

   return (
      <>
         <Head>
            <title>
               {
                  (category === 'Home' || category === 'New' || TagItems.includes(category)) ? 'YouTube' : headerText
               }
            </title>
         </Head>
         <Box className='container'>
            <VideoGridWrapper>
               {
                  loading ? (
                     skeletonCards.map((item, index) => (
                        <FeedVideoCardSkeleton
                           key={index}
                           avatar={true}
                        />
                     ))) : (
                     videoData.map((video, index) => (
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
                              avatar={true}
                              channelTitle={true}
                           />
                        </Box>
                     ))
                  )
               }
            </VideoGridWrapper>
         </Box>
      </>
   );
};

export default HomeFeed;
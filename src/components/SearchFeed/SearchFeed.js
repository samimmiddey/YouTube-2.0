import { Box } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../Helpers/api';
import ErrorCard from '../UI/ErrorCard';
import WrongParamError from '../UI/WrongParamError';
import SearchChannelCard from './SearchChannelCard';
import SearchVideoCard from './SearchVideoCard';
import SearchVideoCardSkeleton from './SearchVideoCardSkeleton';

// ***** STYLES ***** //
// Search Feed Wrapper Style
const searchFeedWrapperStyle = (theme) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   rowGap: '1.5rem',
   maxWidth: '1050px',
   margin: '0 auto',
   [theme.breakpoints.down('md')]: {
      maxWidth: '400px'
   }
});

const SearchFeed = () => {
   const [searchedVideos, setSearchedVideos] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   const route = useRouter();
   const { searchParam } = route.query;

   useEffect(() => {
      setLoading(true);
      const controller = new AbortController();

      if (route.isReady) {
         fetchData(`search?part=snippet&q=${searchParam}`, { signal: controller.signal })
            .then((data) => setSearchedVideos(data.items))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
      }

      return () => {
         controller.abort();
      }
   }, [searchParam, route.isReady]);

   if (error) {
      return <ErrorCard message={error} />
   }

   let skeletonCards = Array(48).fill(0);

   return (
      <>
         <Head>
            <title>{searchParam ? `${searchParam} - YouTube` : 'YouTube'}</title>
         </Head>
         <Box className='container'>
            <Box sx={searchFeedWrapperStyle}>
               {
                  loading ? (
                     skeletonCards.map((item, index) => (
                        <SearchVideoCardSkeleton key={index} />
                     ))
                  ) : (
                     searchedVideos.length === 0 ?
                        (
                           <WrongParamError message='No videso found!' />
                        ) :
                        (
                           searchedVideos.map((video, index) => (
                              video.id.kind === 'youtube#channel' ? (
                                 <SearchChannelCard
                                    key={index}
                                    data={video}
                                    index={index}
                                 />
                              ) : (
                                 <SearchVideoCard
                                    key={index}
                                    data={video}
                                    index={index}
                                 />
                              )
                           ))
                        )
                  )
               }
            </Box>
         </Box>
      </>
   );
};

export default SearchFeed;
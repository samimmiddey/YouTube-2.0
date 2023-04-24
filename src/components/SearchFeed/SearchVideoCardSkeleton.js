import React from 'react';
import { Box, Skeleton } from '@mui/material';

// ***** STYLES ***** //
// Search Video Card Skeleton Wrapper Style
const videoCardSkeletonWrapper = (theme) => ({
   width: '100%',
   display: 'flex',
   alignItems: 'flex-start',
   columnGap: '1rem',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      columnGap: 0,
      rowGap: '16px'
   }
});

// Search Video Card Thumbnail Skeleton Style
const cardThumbnailSkeletonStyle = (theme) => ({
   height: '202px',
   width: '360px',
   borderRadius: '10px',
   [theme.breakpoints.down('md')]: {
      maxWidth: '400px',
      width: '100%',
      height: 'auto',
      aspectRatio: '16/9'
   }
});

const SearchVideoCardSkeleton = () => {
   return (
      <Box sx={videoCardSkeletonWrapper} >
         <Box sx={theme => ({ [theme.breakpoints.down('md')]: { width: '100%' } })}>
            <Skeleton
               animation="wave"
               variant="rectangular"
               sx={cardThumbnailSkeletonStyle}
            />
         </Box>
         <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%' }}>
               <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={theme => ({
                     height: '18px',
                     width: '60%',
                     [theme.breakpoints.down('sm')]: {
                        width: '80%'
                     }
                  })}
               />
            </Box>
            <Skeleton
               animation="wave"
               variant="rectangular"
               sx={theme => ({
                  height: '18px',
                  width: '28%',
                  marginTop: '16px',
                  [theme.breakpoints.down('sm')]: {
                     width: '40%'
                  }
               })}
            />
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '16px',
                  columnGap: '10px',
                  width: '100%',
                  [theme.breakpoints.down('sm')]: {
                     marginTop: '10px'
                  }
               })}
            >
               <Box>
                  <Skeleton
                     animation="wave"
                     variant="circular"
                     width={30}
                     height={30}
                  />
               </Box>
               <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={theme => ({
                     height: '18px',
                     width: '35%',
                     [theme.breakpoints.down('sm')]: {
                        width: '45%'
                     }
                  })}
               />
            </Box>
            <Skeleton
               animation="wave"
               variant="rectangular"
               sx={theme => ({
                  height: '18px',
                  width: '45%',
                  marginTop: '16px',
                  [theme.breakpoints.down('sm')]: {
                     width: '65%',
                     marginTop: '10px'
                  }
               })}
            />
         </Box>
      </Box>
   );
};

export default SearchVideoCardSkeleton;
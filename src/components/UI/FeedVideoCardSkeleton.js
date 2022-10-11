import { Box, Skeleton } from '@mui/material';
import React from 'react';

// ***** STYLES ***** //
// Card Wrapper Style
const cardWrapper = (theme) => ({
   maxWidth: '400px',
   width: '100%',
   [theme.breakpoints.down('sm')]: {
      minHeight: '272px',
      justifySelf: 'center'
   }
});

const FeedVideoCardSkeleton = ({ avatar }) => {
   return (
      <Box sx={cardWrapper}>
         <Box sx={{ height: '200px' }}>
            <Skeleton
               animation="wave"
               variant="rectangular"
               width='100%'
               height='100%'
            />
         </Box>
         <Box
            sx={{
               marginTop: avatar ? '12px' : '16px',
               display: avatar && 'flex',
               justifyContent: avatar && 'flex-start',
               alignItems: avatar && 'flex-start',
               columnGap: avatar && '14px',
               width: '100%',
            }}
         >
            {
               avatar &&
               <Box sx={{ marginTop: '3px' }}>
                  <Skeleton animation="wave" variant="circular" width={36} height={36} />
               </Box>
            }
            <Box sx={{ width: '100%', marginTop: '7px' }}>
               <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={18}
               />
               <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={18}
                  width='60%'
                  sx={{ marginTop: '12px' }}
               />
            </Box>
         </Box>
      </Box >
   );
};

export default FeedVideoCardSkeleton;
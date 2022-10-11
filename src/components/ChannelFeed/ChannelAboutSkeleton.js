import React from 'react';
import { Box, Skeleton, styled } from '@mui/material';

// ***** COMPONENTS ***** //
// Channel About Skeleton Wrapper Component
const ChannelAboutContaier = styled(Box)(({ theme }) => ({
   display: 'grid',
   marginTop: '1rem',
   gridTemplateColumns: '8fr 4fr',
   columnGap: '3rem',
   [theme.breakpoints.down('sm')]: {
      columnGap: 0,
      gridTemplateColumns: 'none',
      rowGap: '2rem'
   }
}));

const ChannelAboutSkeleton = () => {
   const skeletonFirstPartWidth = ['70%', '50%', '30%'];
   const skeletonSecondPartWidth = ['70%', '70%'];

   return (
      <ChannelAboutContaier>
         <Box>
            {skeletonFirstPartWidth.map((width, index) => (
               <Skeleton
                  key={index}
                  animation='wave'
                  variant='rectangular'
                  height={18}
                  width={width}
                  sx={{ marginTop: index !== 0 && '16px' }}
               />
            ))}
         </Box>
         <Box>
            {skeletonSecondPartWidth.map((width, index) => (
               <Skeleton
                  key={index}
                  animation="wave"
                  variant="rectangular"
                  height={18}
                  width={width}
                  sx={{ marginTop: index !== 0 && '16px' }}
               />
            ))}
         </Box>
      </ChannelAboutContaier>
   );
};

export default ChannelAboutSkeleton;
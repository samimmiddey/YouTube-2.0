import React from 'react';
import { Box, Skeleton } from '@mui/material';

// ***** STYLES ***** //
// First Box Style
const firstBoxStyle = {
   marginTop: '-1.5rem',
   position: 'relative',
   marginBottom: '1rem'
};

// Second Box Style
const secondBoxStyle = (theme) => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      rowGap: '12px'
   }
});

// Channel Avatar Skeleton Style
const avatarSkeletonStyle = (theme) => ({
   height: '75px',
   width: '75px',
   [theme.breakpoints.down('xl')]: {
      height: '60px',
      width: '60px'
   },
   [theme.breakpoints.down('lg')]: {
      height: '50px',
      width: '50px'
   },
   [theme.breakpoints.down('sm')]: {
      height: '40px',
      width: '40px'
   },
   [theme.breakpoints.down('xs')]: {
      display: 'none'
   }
});

// Channel Title Skeleton Style
const titleSkeletonStyle = (theme) => ({
   width: '35%',
   [theme.breakpoints.down('xl')]: {
      width: '40%'
   },
   [theme.breakpoints.down('lg')]: {
      width: '45%'
   },
   [theme.breakpoints.down('sm')]: {
      width: '50%',
      margin: '0 auto'
   }
});

// Total Subscribers Skeleton Style
const subscribersSkeletonStyle = (theme) => ({
   width: '20%',
   [theme.breakpoints.down('xl')]: {
      width: '25%'
   },
   [theme.breakpoints.down('lg')]: {
      width: '30%'
   },
   [theme.breakpoints.down('sm')]: {
      width: '35%',
      margin: '0 auto'
   }
});

const ChannelBannerSkeleton = () => {
   return (
      <>
         {/* First Box */}
         <Box sx={firstBoxStyle}>
            <Skeleton
               animation="wave"
               variant="rectangular"
               className='channel-cover-skeleton'
               width='100%'
            />
         </Box>
         {/* Second Box */}
         <Box className='container' sx={secondBoxStyle}>
            <Box
               sx={{
                  width: '100%',
                  display: 'flex',
                  columnGap: '1rem',
                  alignItems: 'center'
               }}
            >
               <Box>
                  <Skeleton
                     animation="wave"
                     variant="circular"
                     sx={avatarSkeletonStyle}
                  />
               </Box>
               <Box
                  sx={theme => ({
                     width: '100%',
                     [theme.breakpoints.down('xs')]: {
                        textAlign: 'center'
                     }
                  })}
               >
                  <Box sx={{ width: '100%' }}>
                     <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={18}
                        sx={titleSkeletonStyle}
                     />
                  </Box>
                  <Box sx={{ width: '100%', marginTop: '12px' }}>
                     <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={18}
                        sx={subscribersSkeletonStyle}
                     />
                  </Box>
               </Box>
            </Box>
            <Skeleton
               animation="wave"
               variant="rectangular"
               height={40}
               width={125}
            />
         </Box>
      </>
   )
}

export default ChannelBannerSkeleton
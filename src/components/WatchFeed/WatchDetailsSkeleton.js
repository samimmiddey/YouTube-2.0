import React from 'react';
import { Box, Skeleton, Divider } from '@mui/material';

const WatchDetailsSkeleton = () => {
   return (
      <Box sx={{ width: '100%' }}>
         <Box
            sx={theme => ({
               width: '100%',
               height: '60vh',
               [theme.breakpoints.down('xl')]: {
                  height: '50vh'
               },
               [theme.breakpoints.down('lg')]: {
                  height: '55vh'
               },
               [theme.breakpoints.down('md')]: {
                  height: '45vh'
               },
               [theme.breakpoints.down('sm')]: {
                  height: '200px'
               }
            })}
         >
            <Skeleton animation="wave" variant="rectangular" width='100%' height='100%' />
         </Box>
         <Box sx={{ marginTop: '2rem' }}>
            <Box
               sx={theme => ({
                  width: '60%',
                  [theme.breakpoints.down('sm')]: {
                     width: '75%'
                  }
               })}
            >
               <Skeleton animation="wave" variant="rectangular" height={18} width="100%" />
            </Box>
            <Box
               sx={theme => ({
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                  [theme.breakpoints.down('sm')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     rowGap: '10px',
                     justifyContent: 'flex-start'
                  }
               })}
            >
               <Box
                  sx={theme => ({
                     width: '35%',
                     [theme.breakpoints.down('sm')]: {
                        width: '40%'
                     }
                  })}
               >
                  <Skeleton animation="wave" variant="rectangular" height={18} width="100%" />
               </Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '20px',
                     [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        margin: '5px 0',
                        justifyContent: 'space-between'
                     }
                  })}
               >
                  <Box>
                     <Skeleton animation="wave" variant="circular" width={25} height={25} />
                  </Box>
                  <Box>
                     <Skeleton animation="wave" variant="circular" width={25} height={25} />
                  </Box>
                  <Box>
                     <Skeleton animation="wave" variant="circular" width={25} height={25} />
                  </Box>
               </Box>
            </Box>
         </Box>
         <Divider
            sx={theme => ({
               margin: '1.5rem 0',
               [theme.breakpoints.down('lg')]: {
                  margin: '1rem 0'
               }
            })}
         />
         <Box
            sx={{
               display: 'flex',
               alignItems: 'flex-start',
               justifyContent: 'space-between'
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  columnGap: '1rem',
                  width: '100%'
               }}
            >
               <Box>
                  <Skeleton animation="wave" variant="circular" width={36} height={36} />
               </Box>
               <Box
                  sx={theme => ({
                     width: '85%',
                     [theme.breakpoints.down('sm')]: {
                        width: '100%'
                     }
                  })}
               >
                  <Skeleton animation="wave" variant="rectangular" height={18} width="50%" />
                  <Skeleton animation="wave" variant="rectangular" height={18} width="20%" sx={{ marginTop: '12px' }} />
               </Box>
            </Box>
            <Box>
               <Skeleton animation="wave" variant="circular" width={25} height={25} />
            </Box>
         </Box>
      </Box >
   );
};

export default WatchDetailsSkeleton;
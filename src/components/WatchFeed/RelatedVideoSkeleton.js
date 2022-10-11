import React from 'react';
import { Box, Skeleton } from '@mui/material';

const RelatedVideoSkeleton = () => {
   const skeletonCards = Array(50).fill(0);

   return (
      <Box
         sx={theme => ({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
            [theme.breakpoints.down('lg')]: {
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               columnGap: '20px',
               rowGap: '32px',
               marginTop: '2rem',
            },
            [theme.breakpoints.down('md')]: {
               gridTemplateColumns: 'repeat(2, 1fr)'
            },
            [theme.breakpoints.down('sm')]: {
               gridTemplateColumns: '1fr',
               rowGap: '24px',
               columnGap: 0
            }
         })}
      >
         {skeletonCards.map((item, index) => (
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
               <Box
                  sx={theme => ({
                     display: 'grid',
                     gridTemplateColumns: 'repeat(2, 1fr)',
                     alignItems: 'start',
                     columnGap: '10px',
                     maxWidth: '400px',
                     width: '100%',
                     [theme.breakpoints.down('lg')]: {
                        gridTemplateColumns: 'none'
                     }
                  })}
               >
                  <Box
                     sx={theme => ({
                        height: '90px',
                        [theme.breakpoints.down('xl')]: {
                           height: '80px'
                        },
                        [theme.breakpoints.down('lg')]: {
                           height: '200px'
                        },
                        [theme.breakpoints.down('sm')]: {
                           height: '196px'
                        }
                     })}
                  >
                     <Skeleton animation="wave" variant="rectangular" width='100%' height='100%' />
                  </Box>
                  <Box
                     sx={theme => ({
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '2px',
                        [theme.breakpoints.down('lg')]: {
                           marginTop: '14px'
                        }
                     })}
                  >
                     <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={15}
                        width="100%"
                     />
                     <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={14}
                        width="60%"
                        sx={{ marginTop: '8px' }}
                     />
                     <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={12}
                        width="40%"
                        sx={{ marginTop: '8px' }}
                     />
                  </Box>
               </Box>
            </Box>
         ))}
      </Box>
   );
};

export default RelatedVideoSkeleton;
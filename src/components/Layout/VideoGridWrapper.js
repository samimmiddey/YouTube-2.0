import React from 'react';
import { Box } from '@mui/material';

const VideoGridWrapper = ({ children }) => {
   return (
      <Box
         sx={theme => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            columnGap: '20px',
            rowGap: '32px',
            [theme.breakpoints.down('lg')]: {
               gridTemplateColumns: 'repeat(3, 1fr)'
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
         {children}
      </Box>
   );
};

export default VideoGridWrapper;
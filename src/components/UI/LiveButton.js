import React from 'react';
import { Box } from '@mui/material';
import { useReactContext } from '../../context/ContextProvider';

const LiveButton = () => {
   const { darkMode } = useReactContext();

   return (
      <Box
         sx={{
            marginTop: '5px',
            padding: '0 7px',
            fontSize: '10px',
            borderRadius: '2px',
            color: '#fff',
            width: 'max-content',
            textTransform: 'uppercase',
            backgroundColor: darkMode ? '#c84646' : '#ff6666',
            '&:hover': {
               backgroundColor: darkMode ? '#c84646' : '#ff6666'
            }
         }}
      >
         Live
      </Box>
   );
};

export default LiveButton;
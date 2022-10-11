import React from 'react';
import { Button } from '@mui/material';
import { useReactContext } from '../../context/ContextProvider';

const SubscribeButton = () => {
   const { darkMode } = useReactContext();

   return (
      <Button
         sx={theme => ({
            backgroundColor: darkMode ? '#c84646' : '#ff6666',
            borderRadius: 0,
            padding: '6px 18px',
            color: '#fff',
            '&:hover': {
               backgroundColor: darkMode ? '#c84646' : '#ff6666'
            },
            [theme.breakpoints.down('sm')]: {
               fontSize: '12px',
               padding: '5px 16px'
            }
         })}
      >
         Subscribe
      </Button>
   );
};

export default SubscribeButton;
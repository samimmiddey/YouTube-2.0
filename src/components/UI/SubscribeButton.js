import React from 'react';
import { Button } from '@mui/material';
import { useReactContext } from '../../context/ContextProvider';

const SubscribeButton = () => {
   const { darkMode } = useReactContext();

   return (
      <Button
         sx={theme => ({
            backgroundColor: darkMode ? '#df4949' : '#ff4d4d',
            borderRadius: '50px',
            padding: '6px 18px',
            fontSize: '13px',
            color: '#fff',
            '&:hover': {
               backgroundColor: darkMode ? '#df4949' : '#ff4d4d'
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
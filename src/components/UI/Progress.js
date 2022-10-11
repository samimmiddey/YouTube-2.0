import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useReactContext } from '../../context/ContextProvider';

const Progress = () => {
   const { darkMode } = useReactContext();

   return (
      <CircularProgress
         disableShrink
         size={28}
         sx={{
            color: darkMode ? '#afacb9' : '#868395'
         }}
      />
   );
}

export default Progress;
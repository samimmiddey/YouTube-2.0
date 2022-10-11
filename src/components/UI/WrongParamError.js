import React from 'react';
import { Box, Typography } from '@mui/material';

const WrongParamError = ({ message }) => {
   return (
      <Box
         sx={{
            position: 'fixed',
            top: '85px',
            left: 0,
            width: '100%',
            textAlign: 'center'
         }}
      >
         <Typography sx={{ color: 'text.primary' }}>
            {message}
         </Typography>
      </Box>
   );
};

export default WrongParamError;
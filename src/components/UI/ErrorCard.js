import React from 'react';
import { Card, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useReactContext } from '../../context/ContextProvider';

// ***** COMPONENTS ***** //
// Error Card Wrapper Component
const ErrorCardWrapper = styled(Card)(({ theme, darkmode }) => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   position: 'fixed',
   top: '50%',
   left: '50%',
   transform: 'translateY(-50%) translateX(-50%)',
   maxWidth: '400px',
   width: '100%',
   padding: '3rem 2rem',
   boxShadow: darkmode === 'true' ? 'rgb(90 114 123 / 2%) 0px 5px 20px 0px' : 'rgb(90 114 123 / 11%) 0px 5px 20px 0px',
   [theme.breakpoints.down('sm')]: {
      padding: '2rem 1.5rem'
   },
   [theme.breakpoints.down('xs')]: {
      maxWidth: '90%'
   }
}));

const ErrorCard = ({ message }) => {
   const { darkMode } = useReactContext();

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <ErrorCardWrapper elevation={0} darkmode={darkMode.toString()}>
         <img
            src={darkMode ? '/errordark.png' : '/error.png'}
            alt="error logo"
            style={{ height: smWidth && '75px', width: smWidth && '75px' }}
         />
         <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: 'text.secondary' }}>
            Oops!
         </Typography>
         <Typography sx={{ fontWeight: 500, color: 'text.disabled', marginTop: '8px', textAlign: 'center' }}>
            Something Went Wrong. Try again later!
         </Typography>
         <Typography sx={{ fontWeight: 500, color: 'text.disabled', marginTop: '5px', fontSize: '14px', textAlign: 'center' }}>
            {message.toUpperCase()}
         </Typography>
      </ErrorCardWrapper>
   );
};

export default ErrorCard;
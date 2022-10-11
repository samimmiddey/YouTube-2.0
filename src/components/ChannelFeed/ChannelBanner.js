import { Avatar, Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import SubscribeButton from '../UI/SubscribeButton';

const social = [
   {
      icon: <FiFacebook style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(55, 98, 210)'
   },
   {
      icon: <FiTwitter style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(26, 187, 255)'
   },
   {
      icon: <FiInstagram style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(247, 70, 140)'
   }
];

// ***** COMPONENTS ***** //
// Social Icon Button Component
const IconButton = styled(Button)(({ theme, bgcolor }) => ({
   minHeight: 0,
   minWidth: 0,
   padding: '8px 12px',
   backgroundColor: bgcolor,
   '&:hover': {
      backgroundColor: bgcolor
   },
   [theme.breakpoints.down('lg')]: {
      padding: '6px 10px'
   },
   [theme.breakpoints.down('sm')]: {
      padding: '6px',
      borderRadius: '50%'
   }
}));

// ***** STYLES ***** //
// First Box Style
const firstBoxStyle = {
   marginTop: '-1.5rem',
   position: 'relative',
   marginBottom: '1rem'
};

// Icon Button Style
const iconButtonWrapperStyle = (theme) => ({
   position: 'absolute',
   bottom: '16px',
   right: '1.5rem',
   [theme.breakpoints.down('sm')]: {
      bottom: '12px',
      right: '1rem'
   }
});

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

// Channel Avatar Style
const channelAvatarStyle = (theme) => ({
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

// Channel Title Style
const channelTitleStyle = (theme) => ({
   fontWeight: 700,
   fontSize: '20px',
   color: theme.palette.text.primary,
   [theme.breakpoints.down('lg')]: {
      fontSize: '18px'
   },
   [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
   }
});

// Total Subscribers Style
const totalSubscribersStyle = (theme) => ({
   fontSize: '14px',
   fontWeight: 500,
   color: theme.palette.text.disabled,
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

const ChannelBanner = ({ channelDetails }) => {
   if (!channelDetails) {
      return;
   }
   return (
      <>
         {/* First Box */}
         <Box sx={firstBoxStyle}>
            <img
               src='/cover.jpg'
               alt=""
               className='channel-cover'
            />
            <Box sx={iconButtonWrapperStyle}>
               <Box
                  sx={{
                     display: 'flex',
                     columnGap: '10px'
                  }}
               >
                  {social.map((item, index) => (
                     <IconButton
                        disableElevation
                        disableRipple
                        key={index}
                        bgcolor={item.bgColor}
                     >
                        {item.icon}
                     </IconButton>
                  ))}
               </Box>
            </Box>
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
               <Avatar sx={channelAvatarStyle} src={channelDetails.snippet.thumbnails.medium.url} />
               <Box
                  sx={theme => ({
                     width: '100%',
                     [theme.breakpoints.down('xs')]: {
                        textAlign: 'center'
                     }
                  })}
               >
                  <Typography className='title-wrap' sx={channelTitleStyle}>
                     {channelDetails.snippet.title}
                  </Typography>
                  <Typography variant='body1' sx={totalSubscribersStyle}>
                     {parseInt(channelDetails.statistics.subscriberCount).toLocaleString()} subscribers
                  </Typography>
               </Box>
            </Box>
            <SubscribeButton />
         </Box>
      </>
   );
};

export default ChannelBanner;
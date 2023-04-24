import React from 'react';
import { Avatar, Box, styled, Typography } from '@mui/material';
import moment from 'moment';
import Link from 'next/link';
import { colors } from '../Data/data';
import { useReactContext } from '../../context/ContextProvider';
import LiveButton from '../UI/LiveButton';

// ***** COMPONENTS *****
// Search Video Card Video Thumbnail Component
const CardThumbnail = styled('img')(({ theme }) => ({
   maxHeight: '202px',
   height: '100%',
   maxWidth: '360px',
   width: '100%',
   objectFit: 'cover',
   aspectRatio: '16/9',
   borderRadius: '10px',
   [theme.breakpoints.down('md')]: {
      maxWidth: '400px',
      maxHeight: '220px',
      height: 'auto'
   }
}));

// Search Video Card Channel Avatar Component
const CardAvatar = styled(Avatar)(({ theme, colors, index, darkmode }) => ({
   height: '25px',
   width: '25px',
   backgroundColor: `${colors[index]}50`,
   fontSize: '14px',
   color: darkmode === 'true' ? theme.palette.text.primary : '#fff',
   fontWeight: 500
}));

// ***** STYLES ***** //
// Search Video Card Wrapper Style
const cardWrapperStyle = (theme) => ({
   width: '100%',
   display: 'flex',
   alignItems: 'flex-start',
   columnGap: '1rem',
   cursor: 'pointer',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      columnGap: 0,
      rowGap: '10px'
   }
});

// Search Video Card Video Title Style
const cardTitleStyle = (theme) => ({
   fontWeight: 600,
   fontSize: '18px',
   color: 'text.primary',
   [theme.breakpoints.down('lg')]: {
      fontSize: '16px'
   },
   [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
   }
});

// Search Video Card Video Date Style
const cardDateStyle = (theme) => ({
   fontSize: '14px',
   fontWeight: 500,
   color: 'text.secondary',
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

// Search Video Card Channel Title Style
const cardChanelTitleStyle = (theme) => ({
   fontSize: '14px',
   fontWeight: 500,
   color: 'text.secondary',
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

// Search Video Card Video Description Style
const cardDescriptionStyle = (theme) => ({
   fontSize: '14px',
   marginTop: '10px',
   color: 'text.secondary',
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

const SearchVideoCard = ({ data, index }) => {
   const { darkMode } = useReactContext();

   const releasedDate = new Date(data.snippet.publishTime).getTime();
   const date = moment(releasedDate).fromNow();

   let videoTitle = data.snippet.title;

   const flags = ['&#39;', '&amp;', '&quot;'];
   for (let i = 0; i < flags.length; i++) {
      if (i === 0 && data.snippet.title.includes(flags[i])) {
         videoTitle = data.snippet.title.replaceAll(flags[i], "'");
      } else if (i === 1 && data.snippet.title.includes(flags[i])) {
         videoTitle = data.snippet.title.replaceAll(flags[i], "&");
      } else if (i === 2 && data.snippet.title.includes(flags[i])) {
         videoTitle = data.snippet.title.replaceAll(flags[i], '"');
      }
   }

   return (
      <Link href={`/watch/${data.id.videoId}`}>
         <Box sx={cardWrapperStyle}>
            <CardThumbnail
               src={data.snippet.thumbnails.high.url}
               alt=""
            />
            <Box>
               <Typography className='title-wrap' sx={cardTitleStyle}>
                  {videoTitle}
               </Typography>
               <Typography variant='body1' sx={cardDateStyle}>
                  {date}
               </Typography>
               <Link href={`/channel/${data.snippet.channelId}`}>
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '10px',
                        columnGap: '10px',
                        width: 'max-content'
                     }}
                  >
                     <CardAvatar
                        colors={colors}
                        index={index}
                        darkmode={darkMode.toString()}
                     >
                        {data.snippet.channelTitle.split(' ')[0].charAt(0)}
                     </CardAvatar>
                     <Typography
                        variant='body1'
                        className='channel-name-wrap'
                        sx={cardChanelTitleStyle}
                     >
                        {data.snippet.channelTitle}
                     </Typography>
                  </Box>
               </Link>
               <Typography
                  variant='body1'
                  className='title-wrap'
                  sx={cardDescriptionStyle}
               >
                  {data.snippet.description}
               </Typography>
               {
                  data.snippet.liveBroadcastContent === 'live' &&
                  <LiveButton />
               }
            </Box>
         </Box>
      </Link>
   );
};

export default SearchVideoCard;
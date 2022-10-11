import React from 'react';
import { Avatar, Box, Typography, styled } from '@mui/material';
import moment from 'moment';
import Link from 'next/link';
import { colors } from '../Data/data';
import { useReactContext } from '../../context/ContextProvider';
import LiveButton from './LiveButton';

// ***** COMPONENTS ***** //
// Feed Channel Avatar Component
const ChannelAvatar = styled(Avatar)(({ theme, index, colors, darkmode }) => ({
   height: '36px',
   width: '36px',
   marginTop: '1px',
   backgroundColor: `${colors[index]}50`,
   color: darkmode === 'true' ? theme.palette.text.primary : '#fff',
   fontWeight: 500
}));

// ***** STYLES ***** //
// Card Wrapper Style
const cardWrapper = {
   maxWidth: '400px',
   width: '100%',
   cursor: 'pointer'
};

// Card ThumbNail Style
const thumbnailStyle = {
   height: 'auto',
   width: '100%',
   objectFit: 'cover',
   aspectRatio: '16/9'
};

// Video Title Style
const videoTitleStyle = (theme) => ({
   fontWeight: 600,
   fontSize: '16px',
   color: 'text.primary',
   [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
   }
});

// Channel Title Style
const channelTitleStyle = (theme) => ({
   fontSize: '14px',
   fontWeight: 600,
   color: 'text.secondary',
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

// Video Date Style
const videoDateStyle = (theme) => ({
   fontSize: '14px',
   fontWeight: 500,
   color: 'text.disabled',
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

const FeedVideoCard = ({ data, index, avatar, channelTitle }) => {
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
         <Box sx={cardWrapper}>
            <img
               src={data.snippet.thumbnails.high.url}
               alt=""
               style={thumbnailStyle}
            />
            <Box
               sx={{
                  marginTop: '8px',
                  display: avatar && 'flex',
                  columnGap: avatar && '14px'
               }}
            >
               {avatar &&
                  <Link href={`/channel/${data.snippet.channelId}`}>
                     <ChannelAvatar
                        index={index}
                        colors={colors}
                        darkmode={darkMode.toString()}
                     >
                        {data.snippet.channelTitle.split(' ')[0].charAt(0)}
                     </ChannelAvatar>
                  </Link>
               }
               <Box>
                  <Typography
                     className='title-wrap'
                     variant='none'
                     sx={videoTitleStyle}
                  >
                     {videoTitle}
                  </Typography>
                  <Box
                     sx={{
                        display: channelTitle && 'flex',
                        flexDirection: channelTitle && 'column',
                        alignItems: channelTitle && 'flex-start',
                        marginTop: '3px'
                     }}
                  >
                     {
                        channelTitle &&
                        <Link href={`/channel/${data.snippet.channelId}`}>
                           <Typography
                              variant='body1'
                              className='channel-name-wrap'
                              sx={channelTitleStyle}
                           >
                              {data.snippet.channelTitle}
                           </Typography>
                        </Link>
                     }
                     <Typography variant='body1' sx={videoDateStyle}>
                        {date}
                     </Typography>
                     {
                        data.snippet.liveBroadcastContent === 'live' &&
                        <LiveButton />
                     }
                  </Box>
               </Box>
            </Box>
         </Box>
      </Link>
   );
};

export default FeedVideoCard;
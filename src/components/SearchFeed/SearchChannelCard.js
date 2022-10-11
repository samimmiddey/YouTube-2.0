import React from 'react';
import Link from 'next/link';
import { Box, Typography, styled, Divider, Avatar } from '@mui/material';
import { useReactContext } from '../../context/ContextProvider';

// ***** COMPONENTS *****
// Search Video Card Video Thumbnail Component
const CardThumbnail = styled(Box)(({ theme }) => ({
   maxHeight: '136px',
   height: '100%',
   maxWidth: '360px',
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   [theme.breakpoints.down('md')]: {
      maxWidth: '400px',
      height: 'auto'
   }
}));

// ***** STYLES ***** //
// Search Video Card Wrapper Style
const cardWrapperStyle = (theme) => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   columnGap: '1rem',
   cursor: 'pointer',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      columnGap: 0,
      rowGap: '16px'
   }
});

// Search Video Card Video Title Style
const cardTitleStyle = (theme) => ({
   fontWeight: 600,
   fontSize: '18px',
   color: 'text.primary',
   [theme.breakpoints.down('lg')]: {
      fontSize: '17px'
   },
   [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
   }
});

// Search Video Card Video Description Style
const cardDescriptionStyle = (theme) => ({
   fontSize: '14px',
   marginTop: '8px',
   color: 'text.secondary',
   [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
   }
});

const SearchChannelCard = ({ data, index }) => {
   const { darkMode } = useReactContext();

   return (
      <Link href={`/channel/${data.snippet.channelId}`}>
         <Box sx={{ width: '100%' }}>
            {
               index !== 0 &&
               <Divider
                  sx={{
                     margin: '0 0 1.35rem 0',
                     borderBottom: darkMode ? '1px solid #373c49' : '1px solid #CACFD2'
                  }}
               />
            }
            <Box sx={cardWrapperStyle}>
               <CardThumbnail>
                  <Avatar
                     src={data.snippet.thumbnails.high.url}
                     alt=""
                     sx={theme => ({
                        maxHeight: '136px',
                        maxWidth: '136px',
                        height: '100%',
                        width: '100%',
                        [theme.breakpoints.down('md')]: {
                           maxHeight: '100px',
                           maxWidth: '100px'
                        }
                     })}
                  />
               </CardThumbnail>
               <Box sx={theme => ({ [theme.breakpoints.down('md')]: { textAlign: 'center' } })}>
                  <Typography className='title-wrap' sx={cardTitleStyle}>
                     {data.snippet.channelTitle}
                  </Typography>
                  <Typography
                     variant='body1'
                     className='title-wrap'
                     sx={cardDescriptionStyle}
                  >
                     {data.snippet.description}
                  </Typography>
               </Box>
            </Box>
            <Divider
               sx={{
                  margin: '1.35rem 0 0 0',
                  borderBottom: darkMode ? '1px solid #373c49' : '1px solid #CACFD2'
               }}
            />
         </Box>
      </Link>
   );
};

export default SearchChannelCard;
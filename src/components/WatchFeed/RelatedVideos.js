import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import Link from 'next/link';
import LiveButton from '../UI/LiveButton';

const RelatedVideos = ({ relatedVideos }) => {
   const relatedVideoTime = (time) => {
      const relatedReleasedDate = new Date(time).getTime();
      const date = moment(relatedReleasedDate).fromNow();

      return date;
   };

   return (
      <Box
         sx={theme => ({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
            [theme.breakpoints.down('lg')]: {
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               columnGap: '20px',
               rowGap: '32px'
            },
            [theme.breakpoints.down('md')]: {
               gridTemplateColumns: 'repeat(2, 1fr)'
            },
            [theme.breakpoints.down('sm')]: {
               gridTemplateColumns: '1fr',
               rowGap: '24px',
               columnGap: 0
            }
         })}
      >
         {
            relatedVideos.map((item, index) => (
               <Link
                  key={index}
                  href={`/watch/${item.id.videoId}`}
                  style={{ textDecoration: 'none' }}
               >
                  <Box
                     sx={theme => ({
                        [theme.breakpoints.down('sm')]: {
                           width: '100%',
                           display: 'flex',
                           justifyContent: 'center'
                        }
                     })}
                  >
                     <Box
                        sx={theme => ({
                           display: 'grid',
                           gridTemplateColumns: 'repeat(2, 1fr)',
                           alignItems: 'start',
                           columnGap: '10px',
                           cursor: 'pointer',
                           width: '369.5px',
                           [theme.breakpoints.down(1600)]: {
                              width: '350px'
                           },
                           [theme.breakpoints.down(1500)]: {
                              width: '330px'
                           },
                           [theme.breakpoints.down(1400)]: {
                              width: '300px'
                           },
                           [theme.breakpoints.down('lg')]: {
                              gridTemplateColumns: 'none',
                              maxWidth: '400px',
                              width: '100%'
                           }
                        })}
                     >
                        <img
                           src={item.snippet.thumbnails.high.url}
                           style={{
                              height: 'auto',
                              width: '100%',
                              objectFit: 'cover',
                              aspectRatio: '16/9',
                              borderRadius: '10px'
                           }}
                           alt=""
                        />
                        <Box
                           sx={theme => ({
                              display: 'flex',
                              flexDirection: 'column',
                              [theme.breakpoints.down('lg')]: {
                                 marginTop: '8px'
                              }
                           })}
                        >
                           <Typography
                              className='title-wrap'
                              variant='none'
                              sx={theme => ({
                                 fontWeight: 600,
                                 fontSize: '14px',
                                 color: 'text.primary',
                                 lineHeight: 1.4,
                                 [theme.breakpoints.down('lg')]: {
                                    fontSize: '16px'
                                 },
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '15px'
                                 }
                              })}
                           >
                              {item.snippet.title}
                           </Typography>
                           <Link href={`/channel/${item.snippet.channelId}`}>
                              <Typography
                                 className='channel-name-wrap'
                                 sx={theme => ({
                                    color: 'text.secondary',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    marginTop: '5px',
                                    width: 'max-content',
                                    [theme.breakpoints.down('lg')]: {
                                       fontSize: '14px',
                                       marginTop: '3px'
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '13px'
                                    }
                                 })}
                              >
                                 {item.snippet.channelTitle}
                              </Typography>
                           </Link>
                           <Typography
                              className='channel-name-wrap'
                              variant='body1'
                              sx={theme => ({
                                 color: 'text.secondary',
                                 fontSize: '12px',
                                 fontWeight: 500,
                                 [theme.breakpoints.down('lg')]: {
                                    fontSize: '14px'
                                 },
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '13px'
                                 }
                              })}
                           >
                              {relatedVideoTime(item.snippet.publishTime)}
                           </Typography>
                           {
                              item.snippet.liveBroadcastContent === 'live' &&
                              <LiveButton />
                           }
                        </Box>
                     </Box>
                  </Box>
               </Link>
            ))
         }
      </Box>
   );
};

export default RelatedVideos;
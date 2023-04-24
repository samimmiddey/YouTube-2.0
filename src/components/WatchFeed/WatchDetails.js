import React, { Fragment, useState } from 'react';
import { Avatar, Box, Button, Tooltip, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import moment from 'moment';
import Link from 'next/link';
import { useReactContext } from '../../context/ContextProvider';
import SubscribeButton from '../UI/SubscribeButton';
import CommentFeed from '../CommentFeed/CommentFeed';


const WatchDetails = ({ data, videoID, channelData }) => {
   const { darkMode } = useReactContext();
   const [expandDesc, setExpandDesc] = useState(false);

   const releasedDate = new Date(data.snippet.publishedAt).getTime();
   const date = moment(releasedDate).format('ll');

   const desc = data.snippet.description;

   const icons = [
      {
         icon: <BiLike style={{ fontSize: '1.35rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'LIKE'
      },
      {
         icon: <BiDislike style={{ fontSize: '1.35rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'DISLIKE'
      },
      {
         icon: <RiShareForwardLine style={{ fontSize: '1.35rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'SHARE'
      }
   ];

   return (
      <Box sx={{ width: '100%' }}>
         <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoID}`}
            controls
            className='react-player'
            playing={true}
         />
         <Box
            sx={theme => ({
               marginTop: '1rem',
               [theme.breakpoints.down('md')]: {
                  marginTop: '14px'
               }
            })}
         >
            <Typography
               className='title-wrap'
               sx={theme => ({
                  fontWeight: 600,
                  fontSize: '20px',
                  color: 'text.primary',
                  [theme.breakpoints.down('xl')]: {
                     fontSize: '18px'
                  },
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '17px'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '15px'
                  }
               })}
            >
               {data.snippet.title}
            </Typography>
            <Box
               sx={theme => ({
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  [theme.breakpoints.down(1400)]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     rowGap: '12px',
                     justifyContent: 'flex-start',
                     marginTop: '5px'
                  }
               })}
            >
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '12px'
                  }}
               >
                  <Link href={`/channel/${data.snippet.channelId}`}>
                     <Avatar
                        sx={{
                           height: '36px',
                           width: '36px',
                           marginTop: '2px',
                           cursor: 'pointer'
                        }}
                        src={channelData.snippet.thumbnails.medium.url}
                     />
                  </Link>
                  <Box>
                     <Link href={`/channel/${data.snippet.channelId}`}>
                        <>
                           <Typography
                              sx={theme => ({
                                 fontSize: '15px',
                                 fontWeight: 600,
                                 color: 'text.primary',
                                 cursor: 'pointer',
                                 maxWidth: 'max-content',
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '13px'
                                 }
                              })}
                           >
                              {channelData.snippet.title}
                           </Typography>
                           <Typography
                              sx={theme => ({
                                 fontSize: '13px',
                                 color: 'text.secondary',
                                 fontWeight: 500,
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '11px'
                                 }
                              })}
                           >
                              {parseInt(channelData.statistics.subscriberCount).toLocaleString()} subscribers
                           </Typography>
                        </>
                     </Link>
                  </Box>
                  <Box sx={{ marginLeft: '1rem' }}>
                     <SubscribeButton />
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '8px'
                  }}
               >
                  {
                     icons.map((item, index) => (
                        <Tooltip key={index} title={item.text} placement='bottom'>
                           <Box
                              sx={theme => ({
                                 display: 'flex',
                                 alignItems: 'center',
                                 columnGap: '6px',
                                 cursor: 'pointer',
                                 padding: '8px 16px',
                                 borderRadius: '50px',
                                 backgroundColor: darkMode ? '#21242c' : '#ededed',
                                 [theme.breakpoints.down('sm')]: {
                                    padding: '6px 12px'
                                 }
                              })}
                           >
                              {item.icon}
                              <Typography
                                 sx={theme => ({
                                    fontSize: '13px',
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '12px'
                                    }
                                 })}
                              >
                                 {
                                    item.text === 'LIKE' ?
                                       parseInt(data.statistics.likeCount).toLocaleString() :
                                       item.text
                                 }
                              </Typography>
                           </Box>
                        </Tooltip>
                     ))
                  }
               </Box>
            </Box>
         </Box>

         {/* Details Box */}
         <Box
            sx={{
               margin: '1rem 0',
               padding: '12px 16px',
               borderRadius: '10px',
               backgroundColor: darkMode ? '#21242c' : '#ededed',
            }}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'flex-start',
                  columnGap: '1rem',
                  width: '100%',
                  [theme.breakpoints.down('sm')]: {
                     columnGap: '10px'
                  }
               })}
            >
               <Box
                  sx={theme => ({
                     width: '85%',
                     [theme.breakpoints.down('sm')]: {
                        width: '100%'
                     }
                  })}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '8px'
                     }}
                  >
                     <Typography
                        sx={theme => ({
                           fontSize: '14px',
                           color: 'text.secondary',
                           fontWeight: 500,
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '12px'
                           }
                        })}
                     >
                        {parseInt(data.statistics.viewCount).toLocaleString()} views
                     </Typography>
                     <Box
                        sx={{
                           height: '3px',
                           width: '3px',
                           borderRadius: '50%',
                           backgroundColor: 'text.disabled'
                        }}
                     />
                     <Typography
                        sx={theme => ({
                           fontSize: '14px',
                           fontWeight: 500,
                           color: 'text.secondary',
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '12px'
                           }
                        })}
                     >
                        {
                           data.snippet.liveBroadcastContent === 'live' ?
                              'Started streaming on ' + date :
                              date
                        }
                     </Typography>
                  </Box>
                  <Box
                     sx={{
                        width: '100%',
                        fontSize: '14px',
                        color: 'text.primary',
                        marginTop: '10px',
                        lineHeight: '1.5',
                        maxHeight: expandDesc ? '100%' : '65px',
                        overflow: 'hidden',
                     }}
                  >
                     {desc.split('\n').map((item, index) => (
                        <Fragment key={index}>
                           {item === '' ? <br /> : <p>{item}</p>}
                        </Fragment>
                     ))}
                  </Box>
                  <Button
                     onClick={() => setExpandDesc(prevState => !prevState)}
                     disableElevation
                     disableRipple
                     variant='text'
                     sx={{
                        color: 'text.secondary',
                        minWidth: 0,
                        marginTop: '6px',
                        padding: '4px 0',
                        fontSize: '12px',
                        fontWeight: 600,
                        '&:hover': {
                           background: 'transparent'
                        }
                     }}
                  >
                     {expandDesc ? 'Show Less' : 'Show More'}
                  </Button>
               </Box>
            </Box>
         </Box>
         {/* Comment Section */}
         {
            data.snippet.liveBroadcastContent !== 'live' &&
            <Box
               sx={theme => ({
                  [theme.breakpoints.down('lg')]: {
                     marginBottom: '1.5rem'
                  }
               })}
            >
               <CommentFeed />
            </Box>}
      </Box>
   );
};

export default WatchDetails;
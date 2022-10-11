import React, { Fragment, useState } from 'react';
import { Avatar, Box, Button, Divider, Tooltip, Typography } from '@mui/material';
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
         icon: <BiLike style={{ fontSize: '1.4rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'LIKE'
      },
      {
         icon: <BiDislike style={{ fontSize: '1.4rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'DISLIKE'
      },
      {
         icon: <RiShareForwardLine style={{ fontSize: '1.4rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
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
         <Box sx={{ marginTop: '1.5rem' }}>
            <Typography
               className='title-wrap'
               sx={theme => ({
                  fontWeight: 500,
                  fontSize: '20px',
                  color: 'text.primary',
                  [theme.breakpoints.down('xl')]: {
                     fontSize: '18px'
                  },
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '16px'
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
                  [theme.breakpoints.down('sm')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     rowGap: '10px',
                     justifyContent: 'flex-start',
                     marginTop: '5px',
                  }
               })}
            >
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '6px'
                  }}
               >
                  <Typography
                     sx={theme => ({
                        fontSize: '14px',
                        color: 'text.secondary',
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
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '20px',
                     [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        margin: '5px 0',
                        justifyContent: 'space-between'
                     }
                  })}
               >
                  {icons.map((item, index) => (
                     <Tooltip key={index} title={item.text} placement='bottom'>
                        <Box
                           sx={theme => ({
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '6px',
                              cursor: 'pointer',
                              [theme.breakpoints.down('sm')]: {
                                 flexDirection: 'column',
                                 rowGap: '3px'
                              }
                           })}
                        >
                           {item.icon}
                           <Typography
                              sx={theme => ({
                                 fontSize: '14px',
                                 color: 'text.primary',
                                 fontWeight: 500,
                                 [theme.breakpoints.down('lg')]: {
                                    fontSize: '13px'
                                 },
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
                  ))}
               </Box>
            </Box>
         </Box>
         <Divider
            sx={theme => ({
               margin: '1.5rem 0',
               [theme.breakpoints.down('lg')]: {
                  margin: '1rem 0'
               },
               [theme.breakpoints.down('sm')]: {
                  margin: '12px 0'
               }
            })}
         />
         <Box
            sx={theme => ({
               display: 'flex',
               alignItems: 'flex-start',
               justifyContent: 'space-between',
               columnGap: '1rem',
               [theme.breakpoints.down('sm')]: {
                  alignItems: 'center',
               }
            })}
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
               <Box
                  sx={theme => ({
                     width: '85%',
                     [theme.breakpoints.down('sm')]: {
                        width: '100%'
                     }
                  })}
               >
                  <Link href={`/channel/${data.snippet.channelId}`}>
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
                  </Link>
                  <Typography
                     sx={theme => ({
                        fontSize: '13px',
                        color: 'text.secondary',
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '11px'
                        }
                     })}
                  >
                     {parseInt(channelData.statistics.subscriberCount).toLocaleString()} subscribers
                  </Typography>
                  <Box
                     sx={theme => ({
                        width: '100%',
                        fontSize: '14px',
                        color: 'text.primary',
                        marginTop: '1rem',
                        lineHeight: '1.5',
                        maxHeight: expandDesc ? '100%' : '65px',
                        overflow: 'hidden',
                        [theme.breakpoints.down('sm')]: {
                           display: 'none'
                        }
                     })}
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
                     sx={theme => ({
                        color: 'text.disabled',
                        minWidth: 0,
                        marginTop: '6px',
                        padding: '4px 0',
                        fontSize: '12px',
                        fontWeight: 700,
                        '&:hover': {
                           background: 'transparent'
                        },
                        [theme.breakpoints.down('sm')]: {
                           display: 'none'
                        }
                     })}
                  >
                     {expandDesc ? 'Show Less' : 'Show More'}
                  </Button>
               </Box>
            </Box>
            <SubscribeButton />
         </Box>
         <Divider
            sx={theme => ({
               margin: '1.5rem 0 1rem 0',
               [theme.breakpoints.down('lg')]: {
                  margin: '1rem 0'
               },
               [theme.breakpoints.down('sm')]: {
                  margin: '12px 0'
               }
            })}
         />
         {/* Mobile View Desc */}
         <Box
            sx={theme => ({
               display: 'none',
               [theme.breakpoints.down('sm')]: {
                  display: 'block'
               }
            })}
         >
            <Box
               sx={{
                  width: '100%',
                  fontSize: '14px',
                  color: 'text.primary',
                  lineHeight: '1.5',
                  maxHeight: expandDesc ? '100%' : 0,
                  overflow: 'hidden'
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
                  color: 'text.disabled',
                  minWidth: 0,
                  marginTop: expandDesc && '6px',
                  padding: '4px 0',
                  fontSize: '12px',
                  fontWeight: 700,
                  '&:hover': {
                     background: 'transparent'
                  }
               }}
            >
               {expandDesc ? 'Hide Description' : 'Show Description'}
            </Button>
            <Divider
               sx={theme => ({
                  margin: '1.5rem 0',
                  [theme.breakpoints.down('lg')]: {
                     margin: '1rem 0'
                  },
                  [theme.breakpoints.down('sm')]: {
                     margin: '12px 0'
                  }
               })}
            />
         </Box>
         {/* Comment Section */}
         {
            data.snippet.liveBroadcastContent !== 'live' &&
            <Box>
               <CommentFeed />
               <Divider
                  sx={theme => ({
                     display: 'none',
                     [theme.breakpoints.down('lg')]: {
                        display: 'block',
                        margin: '1rem 0'
                     },
                     [theme.breakpoints.down('sm')]: {
                        margin: '12px 0'
                     }
                  })}
               />
            </Box>}
      </Box>
   );
};

export default WatchDetails;
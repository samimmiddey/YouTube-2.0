import React, { Fragment } from 'react';
import { Avatar, Box, Button, Tooltip, Typography } from '@mui/material';
import { BiDislike, BiLike } from 'react-icons/bi';
import { useReactContext } from '../../context/ContextProvider';

const Comment = ({ data }) => {
   const { darkMode } = useReactContext();

   const icons = [
      {
         icon: <BiLike style={{ fontSize: '1rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'LIKE'
      },
      {
         icon: <BiDislike style={{ fontSize: '1rem', color: darkMode ? '#aeacb9' : '#545260' }} />,
         text: 'DISLIKE'
      },
      {
         text: 'REPLY'
      }
   ];

   return (
      <Box
         sx={theme => ({
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
            [theme.breakpoints.down('sm')]: {
               columnGap: '10px'
            }
         })}
      >
         <Avatar
            src={data.authorProfileImageUrl}
            sx={theme => ({
               height: '36px',
               width: '36px',
               [theme.breakpoints.down('sm')]: {
                  height: '30px',
                  width: '30px'
               }
            })}
         />
         <Box>
            <Box sx={{ display: 'flex', columnGap: '8px', alignItems: 'center' }}>
               <Typography sx={{ fontSize: '13px', color: 'text.primary', fontWeight: 600 }}>
                  {data.authorDisplayName}
               </Typography>
               <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  20 hours ago
               </Typography>
            </Box>
            <Typography
               className='comment-text'
               sx={{
                  fontSize: '14px',
                  color: 'text.primary',
                  marginTop: '5px',
                  lineHeight: 1.4
               }}
            >
               {data.textOriginal}
            </Typography>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '14px',
                  marginTop: '5px'
               }}
            >
               {icons.map((item, index) => (
                  <Fragment key={index}>
                     <Tooltip title={item.text} placement='bottom'>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '6px',
                              cursor: 'pointer'
                           }}
                        >
                           {item.icon}
                           {
                              item.text === 'LIKE' &&
                              <Typography
                                 sx={{
                                    color: 'text.secondary',
                                    fontSize: '12px',
                                    fontWeight: 500
                                 }}
                              >
                                 {data.likeCount !== 0 && parseInt(data.likeCount).toLocaleString()}
                              </Typography>
                           }
                        </Box>
                     </Tooltip>
                     {
                        index === icons.length - 1 &&
                        <Button
                           disableElevation
                           variant='text'
                           sx={{
                              fontSize: '12px',
                              color: 'text.primary',
                              marginLeft: '-14px'
                           }}
                        >
                           {item.text}
                        </Button>
                     }
                  </Fragment>
               ))}
            </Box>
         </Box>
      </Box>
   );
};

export default Comment;
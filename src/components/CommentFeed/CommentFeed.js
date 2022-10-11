import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { fetchData } from '../../Helpers/api';
import { useRouter } from 'next/router';
import Comment from './Comment';
import Progress from '../UI/Progress';

const CommentFeed = () => {
   const [comments, setComments] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [buttonText, setButtonText] = useState('Show Comments');

   const route = useRouter();
   const { videoID } = route.query;

   const getComments = () => {
      if (buttonText === 'Show Comments' && comments.length === 0) {
         setLoading(true);
         fetchData(`commentThreads?part=snippet&videoId=${videoID}`)
            .then(data => setComments(data.items))
            .catch(error => setError(error.message))
            .finally(() => {
               setButtonText('Hide Comments');
               setLoading(false);
            })
      } else if (buttonText === 'Show Comments' && comments.length >= 1) {
         setButtonText('Hide Comments');
      } else {
         setButtonText('Show Comments');
      }
   }

   return (
      <Box>
         <Box
            sx={theme => ({
               textAlign: 'center',
               [theme.breakpoints.down('sm')]: {
                  textAlign: 'start'
               }
            })}
         >
            <Button
               onClick={getComments}
               disableElevation
               disableRipple
               variant='text'
               sx={{
                  color: 'text.disabled',
                  padding: '4px 0',
                  fontSize: '12px',
                  fontWeight: 700,
                  '&:hover': {
                     background: 'transparent'
                  }
               }}
            >
               {buttonText}
            </Button>
         </Box>
         {/* Comments */}
         <Box
            sx={theme => ({
               display: 'flex',
               flexDirection: 'column',
               rowGap: '1.25rem',
               marginTop: buttonText === 'Hide Comments' && '1rem',
               height: buttonText === 'Hide Comments' ? '100%' :
                  buttonText === 'Show Comments' && loading ? '100%' :
                     0,
               overflow: (buttonText === 'Show Comments' || (buttonText === 'Show Comments' && loading)) && 'hidden',
               [theme.breakpoints.down('lg')]: {
                  maxHeight: '600px',
                  overflow: buttonText === 'Show Comments' ? 'hidden' :
                     buttonText === 'Show Comments' && loading ? 'auto' :
                        'auto',
               },
               [theme.breakpoints.down('sm')]: {
                  maxHeight: '400px'
               }
            })}
         >
            {
               loading && comments.length === 0 ? (
                  <Box sx={{ textAlign: 'center', margin: '10px 0' }}>
                     <Progress />
                  </Box>
               ) : (
                  comments.map((comment, index) => (
                     <Comment
                        key={index}
                        data={comment.snippet.topLevelComment.snippet}
                     />
                  ))
               )
            }
            {
               error &&
               <Typography
                  sx={{
                     fontSize: '15px',
                     color: 'text.secondary',
                     fontWeight: 500,
                     textAlign: 'center'
                  }}
               >
                  {error}
               </Typography>
            }
         </Box>
      </Box>
   );
};

export default CommentFeed;
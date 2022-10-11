import React, { Fragment } from 'react';
import { Box, Divider, styled, Typography } from '@mui/material';
import moment from 'moment';
import ChannelAboutSkeleton from './ChannelAboutSkeleton';

// ***** COMPONENTS ***** //
// Channel About Wrapper Component
const ChannelAboutWrapper = styled(Box)(({ theme }) => ({
   display: 'grid',
   gridTemplateColumns: '8fr 4fr',
   columnGap: '5rem',
   [theme.breakpoints.down('md')]: {
      columnGap: '3rem',
   },
   [theme.breakpoints.down('sm')]: {
      columnGap: 0,
      gridTemplateColumns: 'none',
      rowGap: '2rem'
   }
}));

const ChannelAbout = ({ data }) => {
   if (!data) {
      return <ChannelAboutSkeleton />;
   }

   const releasedDate = new Date(data.snippet.publishedAt).getTime();
   const date = moment(releasedDate).format('ll');

   const channelFirstGridData = [
      { text: 'Description', body: data.snippet.description },
      { text: 'Details', body: data.snippet.country }
   ];

   const channelSecondGridData = [`Joined ${date}`, `${parseInt(data.statistics.viewCount).toLocaleString()} views`];

   return (
      <ChannelAboutWrapper>
         <Box>
            {channelFirstGridData.map((data, index) => (
               <Fragment key={index}>
                  <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                     {data.text}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '14px', marginTop: '1rem' }}>
                     {
                        index === 0 ? data.body :
                           <>
                              <span>Location : </span>
                              <span style={{ marginLeft: '1rem' }}>{data.body}</span>
                           </>
                     }
                  </Typography>
                  {index === 0 && <Divider sx={{ margin: '1.5rem 0' }} />}
               </Fragment>
            ))}
         </Box>
         <Box sx={{ width: '100%' }}>
            <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>Stats</Typography>
            {channelSecondGridData.map((data, index) => (
               <Fragment key={index}>
                  <Divider sx={{ margin: '10px 0' }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>{data}</Typography>
               </Fragment>
            ))}
         </Box>
      </ChannelAboutWrapper>
   );
};

export default ChannelAbout;
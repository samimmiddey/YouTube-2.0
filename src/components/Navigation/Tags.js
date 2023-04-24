import { Box, Button, IconButton, styled } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useReactContext } from '../../context/ContextProvider';
import { TagItems } from '../Data/data';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// ***** COMPONENTS ***** //
// Tags Wrapper Component
const TagsWrapper = styled(Box)(({ darkmode }) => ({
   position: 'fixed',
   top: '60px',
   left: 0,
   right: 0,
   zIndex: 99,
   backgroundColor: darkmode === 'true' ? '#16181d' : '#F8F9F9',
   // borderTop: darkmode === 'true' ? '1px solid #373c49' : '1px solid #CACFD2',
   // borderBottom: darkmode === 'true' ? '1px solid #373c49' : '1px solid #CACFD2'
}));

// Tags Inner Wrapper Component
const TagsInnerWrapper = styled(Box)(({ theme, sidebar }) => ({
   paddingLeft: sidebar === 'true' ? '280px' : '24px',
   paddingRight: '24px',
   transition: '200ms ease',
   paddingTop: '10px',
   paddingBottom: '10px',
   display: 'flex',
   alignItems: 'center',
   columnGap: '10px',
   [theme.breakpoints.down('lg')]: {
      paddingLeft: '24px',
      paddingRight: '24px'
   },
   [theme.breakpoints.down('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px'
   }
}));

// ***** STYLES ***** //
// Tags List Style
const tagsListStyle = {
   display: 'flex',
   columnGap: '10px',
   alignItems: 'center',
   justifyContent: 'flex-start',
   overflow: 'hidden',
   scrollBehavior: 'smooth',
   transition: '200ms ease'
};

const Tags = () => {
   const { sidebar, setTag, tag, darkMode } = useReactContext();
   let scrl = useRef(null);
   const [scrollX, setscrollX] = useState(0);
   const [scrolEnd, setscrolEnd] = useState(false);
   const [tagIndex, setTagIndex] = useState(0);

   const slide = (shift) => {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);

      if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
         setscrolEnd(true);
      } else {
         setscrolEnd(false);
      }
   };

   useEffect(() => {
      if (tag === '') {
         setTagIndex(0);
      }
   }, [tag]);

   return (
      <TagsWrapper darkmode={darkMode.toString()}>
         <TagsInnerWrapper sidebar={sidebar.toString()}>
            <IconButton
               onClick={() => scrollX !== 0 && slide(-200)}
               sx={{ color: 'text.icon' }}
            >
               <FiArrowLeft
                  style={{
                     fontSize: '1.25rem',
                     opacity: scrollX === 0 ? 0.5 : 1
                  }}
               />
            </IconButton>
            <Box ref={scrl} sx={tagsListStyle}>
               {TagItems.map((item, index) => (
                  <Box key={index}>
                     <Button
                        onClick={() => {
                           !(tagIndex === 0 && index === 0) && setTag(item);
                           setTagIndex(index);
                        }}
                        sx={{
                           minHeight: 0,
                           minWidth: 0,
                           padding: '5px 20px',
                           borderRadius: '10px',
                           width: 'max-content',
                           backgroundColor: index === tagIndex ? (darkMode ? '#df4949' : '#ff4d4d') : index !== tagIndex && darkMode ? '#373c49' : '#E5E7E9',
                           fontSize: '14px',
                           textTransform: 'none',
                           color: index === tagIndex ? 'white' : 'text.secondary',
                           '&:hover': {
                              backgroundColor: index === tagIndex ? (darkMode ? '#df4949' : '#ff4d4d') : index !== tagIndex && darkMode ? '#373c49' : '#E5E7E9'
                           }
                        }}
                     >
                        {item}
                     </Button>
                  </Box>
               ))}
            </Box>
            <IconButton
               onClick={() => !scrolEnd && slide(+200)}
               sx={{ color: 'text.icon' }}
            >
               <FiArrowRight
                  style={{
                     fontSize: '1.25rem',
                     opacity: scrolEnd ? 0.5 : 1
                  }}
               />
            </IconButton>
         </TagsInnerWrapper>
      </TagsWrapper>
   );
};

export default Tags;
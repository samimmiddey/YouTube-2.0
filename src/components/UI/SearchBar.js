import React, { useRef, useState } from 'react';
import { Box, Button, styled, TextField, Tooltip } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useReactContext } from '../../context/ContextProvider';

// ***** COMPONENTS ***** //
// TextField Component
const TextFieldComponent = styled(TextField)(({ darkmode }) => ({
   width: '100%',
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: darkmode === 'true' ? '#373c49' : '#CACFD2',
         borderRadius: 0,
         borderWidth: '1px'
      },
      '&:hover fieldset': {
         borderColor: darkmode === 'true' ? '#373c49' : '#CACFD2',
         borderWidth: '1px'
      },
      '&.Mui-focused fieldset': {
         borderColor: '#3366cc',
         borderWidth: '1px'
      }
   }
}));

// Search Button Component
const SearchButton = styled(Button)(({ darkmode }) => ({
   width: '60px',
   height: '40px',
   display: 'flex',
   borderRadius: 0,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: darkmode === 'true' ? '#373c49' : '#E5E7E9',
   border: darkmode === 'true' ? '1px solid #373c49' : '1px solid #D7DBDD',
   borderLeft: 'none',
   '&:hover': {
      backgroundColor: darkmode === 'true' ? '#373c49' : '#E5E7E9',
   }
}));

// ***** STYLES ***** //
// Search Bar Wrapper Style
const searchbarWrapperStyle = {
   maxWidth: '600px',
   width: '100%',
   display: 'flex',
   alignItems: 'center'
}

// Times Icon Wrapper Style
const timesIconWrapperStyle = {
   position: 'absolute',
   top: '50%',
   right: '10px',
   transform: 'translateY(-50%)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer'
}

const SearchBar = () => {
   const { darkMode } = useReactContext();
   const [value, setValue] = useState('');
   const ref = useRef();

   const route = useRouter();

   const hanldeSubmit = e => {
      e.preventDefault();

      if (ref.current.value) {
         route.push(`/search/${ref.current.value}`);
      }
   }

   const handleClear = () => {
      ref.current.value = '';
      setValue('');
   }

   return (
      <form onSubmit={hanldeSubmit}>
         <Box sx={searchbarWrapperStyle}>
            <Box sx={{ width: '100%', position: 'relative' }}>
               <TextFieldComponent
                  inputRef={ref}
                  onChange={e => setValue(e.target.value)}
                  placeholder='Search'
                  variant='outlined'
                  size='small'
                  darkmode={darkMode.toString()}
               />
               {
                  value &&
                  <Box onClick={handleClear} sx={timesIconWrapperStyle}>
                     <FaTimes style={{ fontSize: '1.2rem', color: '#868395' }} />
                  </Box>
               }
            </Box>
            <Tooltip title='Search' placement='bottom'>
               <SearchButton
                  type='submit'
                  disableElevation
                  disableRipple
                  darkmode={darkMode.toString()}
               >
                  <BsSearch
                     style={{
                        fontSize: '1.1rem',
                        color: darkMode ? '#aeacb9' : '#545260',
                     }}
                  />
               </SearchButton>
            </Tooltip>
         </Box>
      </form>
   );
};

export default SearchBar;
import { Box, IconButton, styled } from '@mui/material';
import React from 'react';
import { useReactContext } from '../../context/ContextProvider';
import SearchBar from './SearchBar';
import { MdArrowBack } from 'react-icons/md';

// ***** COMPONENTS ***** //
// Search Modal Wrapper Component
const SearchModalWrapper = styled(Box)(({ theme, darkmode }) => ({
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   height: '60px',
   backgroundColor: darkmode === 'true' ? '#21242c' : '#F8F9F9',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '0 1.5rem 0 1rem',
   zIndex: 9999999,
   [theme.breakpoints.up('md')]: {
      display: 'none'
   }
}));

const SearchModal = () => {
   const { toggleSearchModal, darkMode } = useReactContext();

   return (
      <SearchModalWrapper darkmode={darkMode.toString()}>
         <IconButton
            onClick={() => toggleSearchModal()}
            sx={{
               marginRight: '0.5rem',
               color: 'text.icon'
            }}
         >
            <MdArrowBack sx={{ fontSize: '1.3rem' }} />
         </IconButton>
         <SearchBar />
      </SearchModalWrapper>
   );
};

export default SearchModal;
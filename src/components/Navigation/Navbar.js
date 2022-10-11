import React from 'react';
import { Box, IconButton, Tooltip, useMediaQuery, useTheme, styled } from '@mui/material';
import { FiMenu } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchBar from '../UI/SearchBar';
import { useReactContext } from '../../context/ContextProvider';
import Link from 'next/link';

// ***** COMPONENTS ***** //
// Navbar Wrapper Component
const NavbarWrapper = styled(Box)(({ theme, darkmode }) => ({
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   height: '60px',
   padding: '0 2rem 0 1.5rem',
   backgroundColor: darkmode === 'true' ? '#21242c' : '#F8F9F9',
   zIndex: 999999,
   [theme.breakpoints.down('sm')]: {
      padding: '0 1.5rem 0 1rem'
   }
}));

const Navbar = () => {
   const { toggleSearchModal, toggleSidebar, sidebar, setDarkMode, darkMode } = useReactContext();

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <NavbarWrapper darkmode={darkMode.toString()}>
         {/* Logo */}
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               cursor: 'pointer'
            }}
         >
            <Tooltip title="Menu" placement='bottom'>
               <IconButton
                  onClick={() => sidebar ? toggleSidebar(false) : toggleSidebar(true)}
                  sx={{ color: 'text.icon' }}
               >
                  <FiMenu style={{ fontSize: '1.3rem' }} />
               </IconButton>
            </Tooltip>
            <Link href='/'>
               <img
                  src={darkMode ? '/youtubedark.svg' : '/youtubelight.svg'}
                  alt="youtube logo"
                  style={{ height: '75px' }}
               />
            </Link>
         </Box>
         {/* Search Bar */}
         <Box sx={theme => ({
            maxWidth: '600px',
            width: '100%',
            [theme.breakpoints.down('md')]: {
               display: 'none'
            }
         })}
         >
            <SearchBar />
         </Box>
         {/* Dark Mode Icon */}
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               columnGap: '2rem'
            }}
         >
            {
               mdWidth &&
               <FiSearch
                  onClick={() => toggleSearchModal()}
                  style={{
                     fontSize: '1.4rem',
                     color: darkMode ? '#aeacb9' : '#545260',
                     cursor: 'pointer'
                  }}
               />
            }
            <Tooltip title='Dark Mode' placement='bottom'>
               <IconButton
                  onClick={() => {
                     if (darkMode) {
                        setDarkMode(false);
                        localStorage.removeItem('darkYoutube');
                     } else {
                        setDarkMode(true);
                        localStorage.setItem('darkYoutube', true);
                     }
                  }}
                  sx={{
                     color: 'text.icon',
                     backgroundColor: darkMode ? '#373c49' : '#E5E7E9',
                     "&:hover": {
                        backgroundColor: darkMode ? '#373c49' : '#E5E7E9'
                     }
                  }}
               >
                  {
                     darkMode ? <LightModeOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                        : <DarkModeOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                  }
               </IconButton>
            </Tooltip>
         </Box>
      </NavbarWrapper>
   );
};

export default Navbar;
import React from 'react';
import { Box, IconButton, Tooltip, useMediaQuery, useTheme, styled, Avatar } from '@mui/material';
import { FiMenu } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchBar from '../UI/SearchBar';
import { useReactContext } from '../../context/ContextProvider';
import Link from 'next/link';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

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
   backgroundColor: darkmode === 'true' ? '#16181d' : '#F8F9F9',
   zIndex: 999999,
   [theme.breakpoints.down('sm')]: {
      padding: '0 1.5rem 0 1rem'
   }
}));

const Navbar = () => {
   const { toggleSearchModal, toggleSidebar, sidebar, setDarkMode, darkMode } = useReactContext();

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

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
            maxWidth: '700px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            columnGap: '10px',
            justifyContent: 'flex-end',
            [theme.breakpoints.down('md')]: {
               display: 'none'
            }
         })}
         >
            <SearchBar />
            <Tooltip title='Voice Search' placement='bottom'>
               <IconButton
                  sx={{
                     color: 'text.icon',
                     backgroundColor: darkMode ? '#373c4975' : '#ededed',
                     "&:hover": {
                        backgroundColor: darkMode ? '#373c4975' : '#ededed'
                     }
                  }}
               >
                  <KeyboardVoiceIcon />
               </IconButton>
            </Tooltip>
         </Box>
         {/* Dark Mode Icon */}
         <Box
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               columnGap: '14px',
               marginLeft: '1rem',
               [theme.breakpoints.down('lg')]: {
                  columnGap: '8px'
               },
               [theme.breakpoints.down('md')]: {
                  marginLeft: 0,
                  columnGap: '5px'
               }
            })}
         >
            {
               mdWidth &&
               <Tooltip title='Search' placement='bottom'>
                  <IconButton
                     onClick={() => toggleSearchModal()}
                     size={smWidth ? 'small' : 'medium'}
                  >
                     <FiSearch
                        style={{
                           fontSize: '1.4rem',
                           color: darkMode ? '#aeacb9' : '#545260',
                           cursor: 'pointer'
                        }}
                     />
                  </IconButton>
               </Tooltip>
            }
            <Tooltip title='Dark Mode' placement='bottom'>
               <IconButton
                  size={smWidth ? 'small' : 'medium'}
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
                     // backgroundColor: darkMode ? '#373c49' : '#E5E7E9',
                     // "&:hover": {
                     //    backgroundColor: darkMode ? '#373c49' : '#E5E7E9'
                     // }
                  }}
               >
                  {
                     darkMode ? <LightModeOutlinedIcon />
                        : <DarkModeOutlinedIcon />
                  }
               </IconButton>
            </Tooltip>
            <Tooltip title='Notification' placement='bottom'>
               <IconButton
                  size={smWidth ? 'small' : 'medium'}
                  sx={theme => ({
                     color: 'text.icon',
                     [theme.breakpoints.down(375)]: {
                        display: 'none'
                     }
                  })}
               >
                  <NotificationsNoneOutlinedIcon />
               </IconButton>
            </Tooltip>
            <Tooltip title='Profile' placement='bottom'>
               <Avatar
                  sx={theme => ({
                     height: '36px',
                     width: '36px',
                     cursor: 'pointer',
                     marginLeft: '14px',
                     [theme.breakpoints.down('md')]: {
                        marginLeft: '8px'
                     }
                  })}
                  src='/profile.jpg'
               />
            </Tooltip>
         </Box>
      </NavbarWrapper >
   );
};

export default Navbar;
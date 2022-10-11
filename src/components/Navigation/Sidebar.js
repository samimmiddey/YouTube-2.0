import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useReactContext } from '../../context/ContextProvider';
import { Backdrop, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FiMenu } from 'react-icons/fi';
import Categories from '../Data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = 256;

// ***** COMPONENTS ***** //
// Sidebar Drawer Component
const SidebarDrawer = styled(Drawer)(({ theme }) => ({
   width: drawerWidth,
   flexShrink: 0,
   '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      borderWidth: 0,
      boxShadow: '0 0 50px rgba(0, 0, 0, 0.015)'
   },
   [theme.breakpoints.down('lg')]: {
      zIndex: 999999999
   }
}));

// Logo & Menu Wrapper Component
const LogoMenuWrapper = styled(Box)(({ theme, darkmode }) => ({
   display: 'flex',
   alignItems: 'center',
   position: 'fixed',
   top: 0,
   left: 0,
   height: '60px',
   width: '256px',
   backgroundColor: darkmode === 'true' ? '#21242c' : '#F8F9F9',
   zIndex: 99,
   paddingLeft: '1.5rem',
   [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem'
   }
}));

// Sidebar Drawer List Component
const SidebarList = styled(Box)(({ theme, darkmode }) => ({
   marginTop: '60px',
   paddingTop: '10px',
   overflowY: 'hidden',
   backgroundColor: darkmode === 'true' ? '#21242c' : '#F8F9F9',
   '&:hover': {
      overflowY: 'auto'
   },
   paddingBottom: '2rem',
   overflowX: 'hidden',
   [theme.breakpoints.down('lg')]: {
      overflowY: 'auto'
   }
}));

// ***** STYLES ***** //
// Sidebar Backdrop Style
const backdropStyle = (theme) => ({
   display: 'none',
   zIndex: 99,
   [theme.breakpoints.down('lg')]: {
      zIndex: 99999999,
      display: 'block'
   }
});

// Sidebar List Category Title Style
const categoryTitleStyle = (theme) => ({
   fontWeight: 600,
   fontSize: '14px',
   color: 'text.disabled',
   ml: 4,
   py: '12px',
   [theme.breakpoints.down('sm')]: {
      ml: 3
   }
});

const Sidebar = () => {
   const { sidebar, toggleSidebar, setTag, darkMode } = useReactContext();

   const router = useRouter();

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));

   const sidebarHandler = () => {
      if (!lgWidth) {
         return;
      }
      toggleSidebar(false);
   }

   return (
      <>
         <Backdrop
            onClick={() => sidebar ? toggleSidebar(false) : toggleSidebar(true)}
            open={sidebar}
            sx={backdropStyle}
         />
         <Box sx={{ display: 'flex' }}>
            <SidebarDrawer
               variant="persistent"
               anchor="left"
               open={sidebar}
            >
               <LogoMenuWrapper darkmode={darkMode.toString()}>
                  <IconButton
                     onClick={() => sidebar ? toggleSidebar(false) : toggleSidebar(true)}
                     sx={{ color: 'text.icon' }}
                  >
                     <FiMenu style={{ fontSize: '1.3rem' }} />
                  </IconButton>
                  <img
                     src={darkMode ? '/youtubedark.svg' : '/youtubelight.svg'}
                     alt="youtube logo"
                     style={{ height: '75px' }}
                  />
               </LogoMenuWrapper>
               <SidebarList darkmode={darkMode.toString()}>
                  {Categories.map((category, index) => (
                     <Fragment key={index}>
                        <Typography sx={categoryTitleStyle}>
                           {category.title.toUpperCase()}
                        </Typography>
                        {category.items.map((item, index) => (
                           <Link
                              key={index}
                              href={item.text === 'Home' ? '/' : `/${item.text.split(' ').join('').toLowerCase()}`}
                           >
                              <ListItemButton
                                 onClick={() => {
                                    item.text === 'Home' && setTag('');
                                    sidebarHandler();
                                 }}
                                 sx={theme => ({
                                    margin: '5px 10px 5px 20px',
                                    borderRadius: '5px',
                                    px: 1,
                                    justifyContent: 'initial',
                                    backgroundColor: (item.text === 'Home' ? router.asPath : router.asPath.replace('/', '')) === (item.text === 'Home' ? '/' : item.text.split(' ').join('').toLowerCase()) ? (darkMode ? '#c84646' : '#ff6666') : '',
                                    '&:hover': {
                                       backgroundColor: (item.text === 'Home' ? router.asPath : router.asPath.replace('/', '')) === (item.text === 'Home' ? '/' : item.text.split(' ').join('').toLowerCase()) ? (darkMode ? '#c84646' : '#ff6666') : '',
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                       margin: '5px 10px'
                                    }
                                 })}
                              >
                                 <ListItemIcon
                                    sx={{
                                       color: (item.text === 'Home' ? router.asPath : router.asPath.replace('/', '')) === (item.text === 'Home' ? '/' : item.text.split(' ').join('').toLowerCase()) ? 'white' : 'text.icon',
                                       mr: 1,
                                       justifyContent: 'center',
                                    }}
                                 >
                                    {item.icon}
                                 </ListItemIcon>
                                 <ListItemText
                                    primary={
                                       <Typography style={{ fontSize: '15px' }}>
                                          {item.text}
                                       </Typography>
                                    }
                                    sx={{ color: (item.text === 'Home' ? router.asPath : router.asPath.replace('/', '')) === (item.text === 'Home' ? '/' : item.text.split(' ').join('').toLowerCase()) ? 'white' : 'text.primary' }}
                                 />
                              </ListItemButton>
                           </Link>
                        ))}
                     </Fragment>
                  ))}
               </SidebarList>
            </SidebarDrawer>
         </Box >
      </>
   );
}

export default Sidebar;
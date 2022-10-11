import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useReactContext } from '../../context/ContextProvider';
import SearchModal from '../UI/SearchModal';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Tags from './Tags';

const Navigation = ({ children }) => {
   const { searchModal, sidebar, toggleSidebar } = useReactContext();
   const [isLoading, setIsLoading] = useState(true);

   const router = useRouter();

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));

   useEffect(() => {
      if (lgWidth) {
         toggleSidebar(false);
      } else {
         toggleSidebar(true);
      }

      setIsLoading(false);
   }, [lgWidth, toggleSidebar]);

   return (
      <>
         <Box>
            <Navbar />
            {
               !isLoading &&
               <Sidebar />
            }
            <Box
               component="main"
               sx={theme => ({
                  paddingTop: router.asPath === '/' ? '140px' : '84px',
                  paddingBottom: '3rem',
                  paddingLeft: sidebar ? '256px' : 0,
                  transition: '200ms ease',
                  [theme.breakpoints.down('lg')]: {
                     paddingLeft: 0
                  },
                  [theme.breakpoints.down('sm')]: {
                     paddingLeft: 0
                  }
               })}
            >
               {router.asPath === '/' && <Tags />}
               {children}
            </Box>
         </Box>
         {searchModal && <SearchModal />}
      </>
   );
};

export default Navigation;
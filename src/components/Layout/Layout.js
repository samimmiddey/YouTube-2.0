import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { useReactContext } from '../../context/ContextProvider';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => {
   const { darkMode, setDarkMode } = useReactContext();

   let getMode = darkMode ? 'dark' : 'light';

   if (typeof window !== 'undefined') {
      if (getMode === 'dark') {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
   }

   const getDesignTokens = (mode) => ({
      breakpoints: {
         values: {
            x: 0,
            xs: 500,
            sm: 650,
            md: 950,
            lg: 1280,
            xl: 1536
         }
      },
      palette: {
         mode,
         ...(mode === 'light'
            ? {
               // palette values for light mode
               primary: {
                  main: '#3366cc'
               },
               secondary: {
                  main: '#0099cc'
               },
               text: {
                  primary: '#302f37',
                  secondary: '#868395',
                  disabled: '#a19fad',
                  icon: '#545260'
               }
            }
            : {
               // palette values for dark mode
               primary: {
                  main: '#3366cc'
               },
               secondary: {
                  main: '#0099cc'
               },
               background: {
                  default: '#21242c',
                  paper: '#21242c',
               },
               text: {
                  primary: '#bcbac4',
                  secondary: '#afacb9',
                  disabled: '#a19fad',
                  icon: '#aeacb9'
               }
            })
      },
      typography: {
         fontFamily: 'Inter, sans-serif'
      },
      components: {
         MuiCssBaseline: {
            styleOverrides: `
		  @font-face {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
		  }
		 `,
         },
         MuiCard: {
            styleOverrides: {
               root: {
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: 'rgb(90 114 123 / 11%) 0px 5px 20px 0px'
               }
            }
         }
      }
   });

   const appTheme = createTheme(getDesignTokens(getMode));

   useEffect(() => {
      if (typeof window !== "undefined") {
         if (localStorage.getItem('darkYoutube')) {
            setDarkMode(true);
         }
      }
   }, [setDarkMode]);

   return (
      <ThemeProvider theme={appTheme}>
         <Navigation>
            <main>
               {children}
            </main>
         </Navigation>
      </ThemeProvider>
   );
};

export default Layout;
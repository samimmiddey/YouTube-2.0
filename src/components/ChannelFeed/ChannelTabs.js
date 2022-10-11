import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useReactContext } from '../../context/ContextProvider';

export default function ChannelTabs() {
   const { darkMode, activeTab, setActiveTab } = useReactContext();

   const handleChange = (event, newValue) => {
      setActiveTab(newValue);
   };

   return (
      <Box sx={{ width: '100%', margin: '1rem 0 1.5rem 0' }}>
         <Tabs
            value={activeTab}
            onChange={handleChange}
            TabIndicatorProps={{
               style: {
                  backgroundColor: darkMode ? '#afacb9' : '#302f37',
                  height: '3px'
               }
            }}
            textColor='inherit'
         >
            <Tab
               disableRipple
               value="one"
               label="Videos"
               sx={{
                  color: 'text.primary',
                  fontWeight: 600
               }}
            />
            <Tab
               disableRipple
               value="two"
               label="About"
               sx={{
                  color: 'text.primary',
                  fontWeight: 600
               }}
            />
         </Tabs>
      </Box>
   );
}


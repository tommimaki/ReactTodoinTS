// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Todolist from './Todolist';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers';

// export default function ButtonAppBar() {
//   const [tabIndex, setTabIndex] = React.useState(0);

//   const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
//     setTabIndex(newIndex);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
//               TODO-app
//             </Typography>
//             <Tabs value={tabIndex} onChange={handleTabChange}>
//               <Tab label="Home" />
//               <Tab label="Todo" />
//             </Tabs>
//           </Toolbar>
//         </AppBar>
//         {tabIndex === 0 && (
//           <Box sx={{ my: 2 }}>
//             <Typography variant="h4" component="div" gutterBottom>
//               Welcome to the TODO app!
//             </Typography>
//           </Box>
//         )}
//         {tabIndex === 1 && <Todolist />}
//       </Box>
//     </LocalizationProvider>
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface Props {
  onTabChange: (index: number) => void;
  tabIndex: number;
}

const Header: React.FC<Props> = ({ onTabChange, tabIndex }) => {
  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    onTabChange(newIndex);
  };

  return (
    <AppBar position="static" color="primary">
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Home" sx={{ color: 'white', fontWeight: 'bold' }} />
        <Tab label="Todo" sx={{ color: 'white', fontWeight: 'bold' }} />
      </Tabs>
    </AppBar>
  );
};

export default Header;

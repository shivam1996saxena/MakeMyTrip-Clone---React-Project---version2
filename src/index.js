import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {CssBaseline} from '@mui/material';
// const theme = createTheme({
//     palette:{
//       secondary:{
//         main:'#f70776'
//       }
//     }
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
    
    <App  />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

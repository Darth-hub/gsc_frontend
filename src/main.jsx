import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Header from '../Components/Header.jsx'
import { DataProvider } from './Context/DataContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import { Notifications } from '@mantine/notifications';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Notifications />
          {/* <AuthProvider> */}
            {/* <Header /> */}
            <App />
          {/* </AuthProvider> */}
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,

)

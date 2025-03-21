import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Header from '../Components/Header.jsx'
import { DataProvider } from './Context/DataContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <Notifications />
        <AuthProvider>
          <Header />
          <App />
        </AuthProvider>
    </MantineProvider>
  </StrictMode>,
)

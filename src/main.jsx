import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Header from './Pages/Components/Header.jsx'
import { DataProvider } from './Context/DataContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import { BlogProvider } from './Pages/User/Blogdata.jsx';
import { CommunityDataProvider } from './Pages/Communitydata.jsx';
import { WorkProvider } from './Pages/WorkContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Notifications />
          <AuthProvider>
            <DataProvider>
            <BlogProvider>
              <WorkProvider>
              <CommunityDataProvider>
              <App />
              </CommunityDataProvider>
              </WorkProvider>
            </BlogProvider>
            </DataProvider>
          </AuthProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,

)

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrapRate from './Pages/ScrapRate';
import Footer from '../Components/Footer';
import StorePage from './Pages/StorePage';
import ContactUs from './Pages/ContactUs';
import TermsCondition from './Pages/TermsCondition.jsx'; 
import Landing_Page from './Landing_Page';
import Community from './Pages/Community.jsx';
import Join_community from './Pages/User/Join_community.jsx';
import User_dashboard from './Pages/User/User_dashboard.jsx';
import BlogPage from './Pages/BlogsPage.jsx';

function App() {
  return (
    <>
    
    
    <Routes>
      <Route path='/' element={<Landing_Page />} />
    </Routes>
    

    <Routes>
      <Route path='/community' element={<Community />} />
      <Route path='/Join_community' element={<Join_community />} />
      <Route path='/User' element={<User_dashboard />} />
      <Route path='/scrap_rate' element={<ScrapRate />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/store' element={<StorePage />} />
      <Route path='/terms&condition' element={<TermsCondition />} />
      <Route path="/blogs" element={<BlogPage />} />
    </Routes>


    
    </>
  );
}

export default App;

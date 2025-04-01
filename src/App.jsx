import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrapRate from './Pages/ScrapRate';
import Footer from './Pages/Components/Footer';
import StorePage from './Pages/StorePage';
import ContactUs from './Pages/ContactUs';
import TermsCondition from './Pages/TermsCondition.jsx'; 
import Community from './Pages/Community.jsx';
import Join_community from './Pages/User/Join_community.jsx';
import User_dashboard from './Pages/User/User_dashboard.jsx';
import BlogPage from './Pages/BlogsPage.jsx';
import Expandedblogs from './Pages/Components/Expandedblogs.jsx';
import Authentication from  '../src/Pages/Authentication.jsx'
import SchedulePickUp from './Pages/SchedulePickUp.jsx'
import User_profile from './Pages/User/User_profile.jsx';
import  ViewPickUp from './Pages/ViewPickUp.jsx'
import SellToIndustries from './Pages/SellToIndustries.jsx'
import ViewIndustries from './Pages/ViewIndustries.jsx';
import { View } from 'lucide-react';
import CommunityChat from './Pages/CommunityChat.jsx'
import Landing_Page from './Landing_Page.jsx';





function App() {
  return (
    <>    
    <Routes>
      <Route path='/' element={<Landing_Page />} />
    </Routes>
    

    <Routes>
      <Route path='/community' element={<Community />} />
      <Route path="/community/:communityName" element={<Join_community />} />
      <Route path='/User' element={<User_profile />} />
      <Route path='/scrap_rate' element={<ScrapRate />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/store' element={<StorePage />} />
      <Route path='/terms&condition' element={<TermsCondition />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blog" element={<Expandedblogs />} />
      <Route path="/login" element={<Authentication />} />
      <Route path='/schedulepickup' element={<SchedulePickUp/>} />
      <Route path='/viewPickUps' element={<ViewPickUp/>} />
      <Route path='/viewindustries' element={<ViewIndustries/>} />
      <Route path='selltoindustries/:id' element={<SellToIndustries/>} />
      <Route path= '/CommunityChat' element={<CommunityChat/>} />
    </Routes>
    
    </>
  );
}

export default App;

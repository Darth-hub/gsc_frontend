import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from '../Components/Home'
import Blogs from './Pages/Blogs'
import Campaign from './Pages/Campaign'
import Line from '../Components/Line'
import Customer_Review from './Pages/Customer_Review'
import How_We_Work from './Pages/How_We_Work'
import Footer from '../Components/Footer'
import User_profile from './Pages/User/User_profile'
import User_dashboard from './Pages/User/User_dashboard'
import Buy_scarp from './Pages/User/Buy_scarp'
import Community from './Pages/Community'
import Join_community from './Pages/User/Join_community'
import Landing_Page from './Landing_page';
import View_pickups from './Pages/User/View_pickups';
import Loader from '../Components/Loader';

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
import Blogs from './Pages/Blogs';
import Campaign from './Pages/Campaign';
import Line from '../Components/Line';
import Customer_Review from './Pages/Customer_Review';
import How_We_Work from './Pages/How_We_Work';
import ScrapRate from './Pages/ScrapRate';
import Footer from '../Components/Footer';
import StorePage from './Pages/StorePage';
import ContactUs from './Pages/ContactUs';
import HeroBanner from '../Components/HeroBanner';
import TermsCondition from './Pages/TermsCondition.jsx';
import OurPresence from './Pages/OurPresence.jsx'; 

function App() {
  return (
    <>

    




    
    
    {/* <Buy_scarp /> */}
    {/* <User_profile /> */}
    <Loader />
    
    <Routes>
      <Route path='/' element={<Landing_Page />} />
    </Routes>
    
    
    

    <Routes>
      <Route path='/community' element={<Community />} />
      <Route path='/Join_community' element={<Join_community />} />
      <Route path='/User' element={<User_dashboard />} />
    </Routes>


    
    </>
  );
}

export default App;

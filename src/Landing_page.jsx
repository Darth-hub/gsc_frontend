import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from '../Components/Home'
import Blogs from './Pages/Blogs'
import Campaign from './Pages/Campaign'
import HeroBanner from '../Components/HeroBanner';
import OurPresence from './Pages/OurPresence.jsx';
import Line from '../Components/Line'
import Customer_Review from './Pages/Customer_Review'
import How_We_Work from './Pages/How_We_Work'
import Footer from '../Components/Footer'
import User_profile from './Pages/User/User_profile'
import User_dashboard from './Pages/User/User_dashboard'
import Buy_scarp from './Pages/User/Buy_scarp'
import Community from './Pages/Community'
import Join_community from './Pages/User/Join_community'
import Store from './Pages/StorePage.jsx';
import BlogPage from './Pages/BlogsPage.jsx';
import TermsCondition from './Pages/TermsCondition.jsx'
import Chatbot from './Pages/Chatbot.jsx'
import Expandedblogs from '../Components/Expandedblogs.jsx';
import Authentication from './Pages/Authentication.jsx';


const Landing_Page = () => {
  return (
    <>
    <Home />
    <Line />
    <Blogs />
    <HeroBanner />
    <OurPresence />
    <Campaign />
    <Customer_Review />
    <How_We_Work />
    <Footer />
    {/* <Chatbot />
     */}
    </>
  )
}

export default Landing_Page

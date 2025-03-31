import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from '../Components/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Campaign from './Pages/Campaign.jsx'
import HeroBanner from '../Components/HeroBanner.jsx';
import OurPresence from './Pages/OurPresence.jsx';
import Line from '../Components/Line.jsx'
import Customer_Review from './Pages/Customer_Review.jsx'
import How_We_Work from './Pages/How_We_Work.jsx'
import Footer from '../Components/Footer.jsx'
import User_profile from './Pages/User/User_profile.jsx'
import User_dashboard from './Pages/User/User_dashboard.jsx'
import Buy_scarp from './Pages/User/Buy_scarp.jsx'
import Community from './Pages/Community.jsx'
import Join_community from './Pages/User/Join_community.jsx'
import Store from './Pages/StorePage.jsx';
import BlogPage from './Pages/BlogsPage.jsx';
import TermsCondition from './Pages/TermsCondition.jsx'
import Chatbot from './Pages/Chatbot.jsx'
import Expandedblogs from '../Components/Expandedblogs.jsx';
import Authentication from './Pages/Authentication.jsx';
import { useAuth } from './Context/AuthContext.jsx';
import Loader from '../Components/Loader.jsx';
import SearchPage from './Pages/SearchPage.jsx';



const Landing_Page = () => {
  const { user, loading } = useAuth();
  const [isPageLoading, setIsPageLoading] = useState(true); // Page Load State

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isPageLoading || loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader size="lg" />
      </div>
    );
  }


  return (
    <>
    <Home />
    <Line />
    <Blogs />
    <HeroBanner />
    <OurPresence />
    <SearchPage />
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

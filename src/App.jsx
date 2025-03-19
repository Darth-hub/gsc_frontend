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
      {/* Page Components */}
      <Home />
      <Blogs />
      <HeroBanner />
      <OurPresence /> 
      <Campaign /> 
      <Line />
      <Customer_Review />
      <How_We_Work /> 
      <ScrapRate />
      <StorePage /> 
      <ContactUs /> 
      <TermsCondition />
      

      {/* <Chatbot /> */}
      <Footer />
    </>
  );
}

export default App;

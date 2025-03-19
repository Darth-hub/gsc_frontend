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

const Landing_Page = () => {
  return (
    <>
    <Home />
    <Line />
    <Blogs />
    <Campaign />
    <Customer_Review />
    <How_We_Work />
    <Footer />
    </>
  )
}

export default Landing_Page

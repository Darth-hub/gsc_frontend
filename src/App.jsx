import React from 'react'
import './App.css'
import Home from '../Components/Home'
import Blogs from './Pages/Blogs'
import Campaign from './Pages/Campaign'
import Line from '../Components/Line'
import Customer_Review from './Pages/Customer_Review'
import How_We_Work from './Pages/How_We_Work'
import Footer from '../Components/Footer'



const App = () => {
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

export default App

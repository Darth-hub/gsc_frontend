import React from 'react';
import './App.css';
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


function App() {
  return (
    <>
      {/* Page Components */}
       <Home />
      <Blogs />
      <Campaign />
      <Line />
      <Customer_Review />
      <How_We_Work /> 
      <ScrapRate />
      <StorePage /> 
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

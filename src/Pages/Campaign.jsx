import React from 'react'
import "../App.css"
import Campaign_Cards from '../../Components/Campaign_Cards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Campaign = () => {


  return (
    <div  class='Campaign bg-[#1B2316] flex flex-col items-center w-full h-screen text-white'>
        <div className='flex justify-center'><hr className='w-[90vw]'></hr></div>

        <div className='mt-10  text-5xl'><h1>OUR TOP CAMPAIGN</h1></div>

        <div className=' w-full flex gap-10 h-full pt-10 px-20'>
        
        <Campaign_Cards/>
        <Campaign_Cards/>
        <Campaign_Cards/>
        <Campaign_Cards/>
        <Campaign_Cards/>
       
        </div>


      
    </div>
  )
}

export default Campaign

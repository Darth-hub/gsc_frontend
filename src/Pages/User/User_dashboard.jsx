import React from 'react'
import logo from '/images/BIG_LOGO.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Header from '../Components/Header';


const User_dashboard = () => {
  return (
    <>
    <Header />
    <div className='flex gap-25 mt-8'>
        <div className='flex flex-col  w-[45vw] ml-40 mt-20'>
          <div className=''>
          <h1 className='text-[3.5em]' id='company'>Sell your scrap here online <br /> with <span className='compName text-[#428700]'>ECLYRA</span></h1>
          
          </div>
          <button class='button rounded-2xl mt-15 py-3  mr-5 w-[60%]'><p class="text"><span className='font-medium'>Schedule Your Pickup</span></p></button>
          <button class='button rounded-2xl mt-5 py-3  mr-5 w-[60%]'><p class="text font-medium">View Pickups</p></button>
        </div>
    
    
        <div className='relative '>
        <img  src={logo} className='h-[32vw] z-2' />
        </div>
        </div>
    </>
  )
}

export default User_dashboard

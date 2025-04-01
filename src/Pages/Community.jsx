import React from 'react'
import Community_card from './Components/Community_card'
import { HashLink as Link } from "react-router-hash-link";
import Header from './Components/Header';
import Footer from './Components/Footer';


const Community = () => {
  return (
    <>
    <div className=' w-screen  p-10'>
         <div className='flex text-white gap-5 text-3xl w-full'>
            <div> <Link smooth to="/"><i class="ri-arrow-left-line"></i></Link> </div>
            <div><h1><span>JOIN COMMUNITY</span></h1></div>
         </div>
         <div className=' w-full flex flex-wrap justify-around items-start gap-5 h-[90%] p-3 mt-5'>
            <Community_card />

         </div>
    </div>
    <Footer />
    
    </>
  )
}

export default Community

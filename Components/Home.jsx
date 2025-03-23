import React from 'react'
import logo from './images/BIG_LOGO.png'
import earth from './images/earth.png'
import ring from './images/ring.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import cloud from "./images/Cloud.png"
import Header from './Header';
import { HashLink as Link } from "react-router-hash-link";


const Home = () => {
  return (
    <>
    <div className='flex items-center gap-20 justify-between'>
      <div>
      <Header />
      </div>
      <div>
      <Link smooth to="/login">
      <button class="button px-3 py-1 mr-10 rounded-lg justify-self-end mt-6"><p class="text">login/sign up</p></button>
      </Link>
      </div>
    </div>
    <div className='flex gap-35 mt-8 text-white'>
        <div className=' flex flex-col  w-[35vw] ml-40 mt-14'>
          <div>
          <h1 className='text-[7em]' id='company'>ECLYRA</h1>
          <p className='text-[1.2em] relative bottom-8.5 left-2' >♻️ Sustainable Living, Simplified.</p>
          <p>At ECLYRA, we simplify waste management by connecting you with reliable recycling solutions. Dispose of e-waste, plastics, metals, and paper responsibly—reducing pollution for a greener future. </p>
          </div>
          <Link smooth to='/schedulepickup'>
          <button class='button rounded-xl mt-15 py-3 self-end mr-5 w-[60%]'><p class="text">Start Recycling Now</p></button>
          </Link>
        </div>
    
    
        <div className='relative flex justify-center items-center  aspect-square'>
        <img  src={logo} className='h-[75vh]' />
        </div>
        </div>
    </>
  )
}

export default Home
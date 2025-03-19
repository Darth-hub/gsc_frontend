import React from 'react'
import logo from './images/LOGO.png'
import 'remixicon/fonts/remixicon.css'
import { HashLink as Link } from "react-router-hash-link";


const Header = () => {
  return (
    <div className='h-20  flex items-center text-white'>
      <nav className='flex items-end w-full pl-8 '>
        <div class="flex items-end justify-around gap-4">
            <img src={logo} className='h-[3rem]' />
            <h1 className='text-3xl'>ECLYRA</h1>
        </div>
        <div className='ml-30  text-[0.9em] flex gap-30 text-semibold'>
            <Link smooth to="/">HOME</Link>
            <Link smooth to="/scrap_rate">SCRAP RATE</Link>
            <Link smooth to="/#about">ABOUT US</Link>
            <Link smooth to="/contact">CONTACT US</Link>
            <Link smooth to="/community">JOIN COMMUNITY</Link>
            
        </div>
        {/* <div>
        <i class="ri-menu-3-line text-[2rem] absolute top-5 right-10"></i>
        </div> */}
      </nav>

    </div>
  )
}

export default Header

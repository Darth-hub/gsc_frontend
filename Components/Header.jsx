import React from 'react'
import logo from './images/LOGO.png'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='h-20  flex items-center'>
      <nav className='flex items-end w-full pl-8 '>
        <div class="flex items-end justify-around gap-4">
            <img src={logo} className='h-[3rem]' />
            <h1 className='text-3xl'>ECLYRA</h1>
        </div>
        <div className='ml-30  flex gap-40 text-semibold'>
            <a href="">HOME</a>
            <a href="">SCRAP TYPE</a>
            <a href="">ABOUT US</a>
            <a href="">CONTACT US</a>
            <button class="button px-3 py-1"><p class="text">login/sign up</p></button>
        </div>
        {/* <div>
        <i class="ri-menu-3-line text-[2rem] absolute top-5 right-10"></i>
        </div> */}
      </nav>
    </div>
  )
}

export default Header

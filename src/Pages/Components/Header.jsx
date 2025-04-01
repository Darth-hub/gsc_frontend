import React from 'react'
import eclyralogo from '/images/eclyralogo.png'
import 'remixicon/fonts/remixicon.css'
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from '../../Context/AuthContext';


const Header = () => {
  const {user} = useAuth()

  return (
    <div className='h-20  flex items-center pt-1 bg-transparent   text-white'>
      <nav className='flex  items-end w-full pl-8 '>
      <Link smooth to="/">
      <div class="flex items-end  justify-around gap-9">
            <img src={eclyralogo} className='h-[3.5rem]'/>
            <h1 className='text-3xl'>ECLYRA</h1>
        </div></Link>
        <div className='ml-30  text-[0.9em] flex gap-30 text-semibold'>
            <Link smooth to="/scrap_rate">SCRAP RATE</Link>
            <Link smooth to="/store">STORE</Link>
            <Link smooth to="/blogs">BLOGS</Link>
            <Link smooth to="/community">JOIN COMMUNITY</Link>
            {user && user.role === 'Seller' && <Link smooth to="/User">MY PROFILE</Link>}
            
        </div>
      </nav>

    </div>
  )
}

export default Header

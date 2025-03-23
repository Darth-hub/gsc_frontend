import React from 'react'
import profile from '../../../Components/images/profilepic.png'
import { HashLink as Link } from "react-router-hash-link";
import eclyralogo from '../../../Components/images/eclyralogo.png'


const User_profile = () => {
  return (
    <div className='w-screen flex justify-center gap-5 items-center h-screen bg-[#1b2316]'>
        <div className='bg-[#3D8D7A] flex flex-col gap-2.5 p-8 items-center rounded-xl w-[25%] h-[90%]'>
            <div className=' flex items-end gap-2.5  '>
                <div><img src={profile} alt="" className='w-[70px] aspect-square'  /></div>
                <div className='text-xl'>
                <h3>Hi,</h3>
                <h1>Ayush Kumar</h1>
                <h2 className='text-sm'>ayushkr2883@gmail.com</h2>
            </div>
            </div>

            <div className='w-[90%] h-[500px] flex flex-col items-center mt-10 p-5'>
                <div>
                <h1 className='text-4xl'>QUICK LINKS</h1>
                </div>

                <div className="flex items-center flex-col mt-5 gap-1">
                    <Link smooth to="/" className="transition-transform duration-300 hover:scale-[1.1] hover:font-medium">HOME</Link>
                    <Link smooth to="/scrap_rate" className="transition-transform duration-300 hover:scale-[1.1] hover:font-medium">SCRAP RATE</Link>
                    <Link smooth to="/store" className="transition-transform duration-300 hover:scale-[1.1] hover:font-medium">STORE</Link>
                    <Link smooth to="/community" className="transition-transform duration-300 hover:scale-[1.1] hover:font-medium">JOIN COMMUNITY</Link>
                    <Link smooth to="/contact" className="transition-transform duration-300 hover:scale-[1.1] hover:font-medium">CONTACT US</Link>
                    <Link smooth to="/terms&condition" className="transition-transform duration-300 hover:scale-[1.1] hover:font-medium">TERMS AND CONDITIONS</Link>

                </div>

                <div class="flex items-end scale-[1.5] mt-15 justify-around gap-9">
                    <img src={eclyralogo} className='h-[3.5rem] ' />
                    <h1 className='text-3xl'>ECLYRA</h1>
                </div>
                
            </div>
            
        </div>

        <div className='bg-[#3D8D7A] rounded-xl h-[90%] w-[60%]'>
            <div className="h-[50%] w-[100%] bg-amber-400 p-2">
                <h2>ACTIVE PICKUPS</h2>
            </div>

            <div className="h-[50%] w-[100%] bg-amber-900"></div>
        </div>
      
    </div>
  )
}

export default User_profile

import React from 'react'
import Logo  from "../Components/images/eclyralogo.png"
import fb from "../Components/images/facebook.png"
import insta from "../Components/images/instagram.png"
import twitter from "../Components/images/twitter.png"
import Subscribe from './Subscribe'
import { HashLink as Link } from "react-router-hash-link";
import Gmail from '../Components/images/gmail.png';
import './Component.css';


const Footer = () => {



  return (
    <div id="contact" className='w-full text-white flex justify-between  h-[45vh] bg-[#222C1D]'>

        <div className=' w-[40%] flex flex-col relative top-[-25px] justify-center items-center h-full'>
            <div className='w-[70%] h-[20%] flex gap-5 '>
                <div className='  h-[100%] '>
                    <img src={Logo} className='object-contain drop-shadow-2xl h-[100%]' />
                </div>
                <div>
                    <h1 className=' text-[3rem]'>ECLYRA</h1>
                </div>
            </div>

            <div className='w-[70%] px-2 py-2 '>
                <div>
                    <h1 className='text-lg underline'>Follow Us On</h1>
                </div>
                <div className='h-[25px] flex gap-3 mt-3'>
                    <Link smooth to=""><img src={fb} className='object-contain h-[35px] hover:-translate-y-2 duration-300 ease-in' /></Link>
                    <Link smooth to=""><img src={insta} className='object-contain h-[35px] hover:-translate-y-2 duration-300 ease-in' /></Link>
                    <Link smooth to=""><img src={twitter} className='object-contain h-[35px] hover:-translate-y-2 duration-300 ease-in' /></Link>
                </div>
                
            </div>

        </div>

        <div className='w-[50%] flex h-full mr-15 '>
            <div className='w-[30%]   h-full  p-5 py-15'>
                <h1 className='text-lg  mb-3 underline'> Quick Link's</h1>
                <div className=' flex flex-col gap-1'>
                <Link smooth to="/" className='hover:translate-x-2 duration-300 ease-in'><span >Home</span></Link>
                <Link smooth to="/contact" className='hover:translate-x-2 duration-300 ease-in'><span >Contact</span></Link>
                <Link smooth to="/terms&condition" className='hover:translate-x-2 duration-300 ease-in'><span >Terms and Condition</span></Link>
                </div>
            </div>

            <div className="w-[70%] flex flex-col gap-2 py-15 h-full px-10">
                <h1 className="text-lg underline">For Every Update.</h1>
    
                <Subscribe />
    </div>
</div>


        </div>
        

   
  )
}

export default Footer

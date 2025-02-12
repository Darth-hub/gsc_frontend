import React from 'react'
import Logo  from "../Components/images/LOGO.png"
import fb from "../Components/images/facebook.png"
import insta from "../Components/images/instagram.png"
import twitter from "../Components/images/twitter.png"
import Subscribe from './Subscribe'



const Footer = () => {
  return (
    <div className='w-full flex justify-between  h-[45vh] bg-[#222C1D]'>

        <div className=' w-[40%] flex flex-col relative top-[-25px] justify-center items-center h-full'>
            <div className='w-[70%] h-[20%] flex gap-2 '>
                <div className='  h-[100%] '>
                    <img src={Logo} className='object-contain drop-shadow-2xl h-[100%]' />
                </div>
                <div>
                    <h1 className=' text-[3rem]'>ECLYRA</h1>
                </div>
            </div>

            <div className='w-[70%] px-5 py-2 '>
                <div>
                    <h1 className='text-lg'>Follow Us On</h1>
                </div>
                <div className='h-[25px] flex gap-3 mt-3'>
                    <a href=""><img src={fb} className='object-contain h-[35px] hover:-translate-y-2 duration-300 ease-in' /></a>
                    <a href=""><img src={insta} className='object-contain h-[35px] hover:-translate-y-2 duration-300 ease-in' /></a>
                    <a href=""><img src={twitter} className='object-contain h-[35px] hover:-translate-y-2 duration-300 ease-in' /></a>
                </div>
                
            </div>

        </div>

        <div className='w-[50%] flex h-full mr-15 '>
            <div className='w-[30%]  h-full  p-10 py-15'>
                <h1 className='text-lg  mb-3'> Quick Link's</h1>
                <div className=' flex flex-col gap-1'>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><span >Home</span></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><span >Contact</span></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><span >Privacy</span></a>
                </div>
            </div>

            <div className=' w-[70%] flex flex-col gap-2 py-15 h-full  px-10'>
                <h1 className='text-lg'>For Every Update.</h1>
                <Subscribe />
            </div>

        </div>
        

    </div>
  )
}

export default Footer

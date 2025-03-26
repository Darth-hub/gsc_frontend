import React from 'react'
import AuthenticationForm from '../../Components/AuthenticationForm'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { FaArrowLeft } from "react-icons/fa";


const Authentication = () => {

  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen'>
    <div className='absolute text-white top-10 left-10 text-4xl cursor-pointer' onClick={() => navigate(-1)}><FaArrowLeft /></div>
    <div className='flex flex-col justify-center items-center '>
        <div className='h-[15vh]'/>
        <AuthenticationForm open={open}/>
        <div className='h-[15vh]'/>
    </div>
    </div>
    
  )
}

export default Authentication
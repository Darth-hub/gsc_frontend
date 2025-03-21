import React from 'react'
import AuthenticationForm from '../../Components/AuthenticationForm'
import { useParams } from 'react-router-dom'

const Authentication = () => {

  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='h-[15vh]'/>
        <AuthenticationForm open={open}/>
        <div className='h-[15vh]'/>
    </div>
  )
}

export default Authentication
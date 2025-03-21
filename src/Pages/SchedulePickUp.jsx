import React, { useState } from 'react'
import PickUpForm from '../../Components/PickUpForm'
import { Text } from '@mantine/core'
import { useAuth } from '../Context/AuthContext'

const SchedulePickUp = () => {
  const user = useAuth()

  if(user){
    return (
      <div className='h-screen flex'>
          <div className='w-[60vw] p-20'>
          <h1 className="title">
            Recycle Smarter with {' '}
            <Text mb='md' component="span" variant="gradient" gradient={{ from: 'green', to: 'cyan' }} inherit>
              ECLYRA 
            </Text>{' '}
              <div className='text-5xl'>
                  Easy Pickups, Zero Hassle!
              </div>
          </h1>
              <img src='../../Components/images/pageImg.png' className='ml-[8vw] mt-[5vh] h-[50vh]'/>
          </div>        
  
          <div className='mt-[10vh]'>
              <PickUpForm />
          </div>
      </div>
    )
  }else{
    return(
      <div>
        access denied
      </div>
    )
  }


}

export default SchedulePickUp
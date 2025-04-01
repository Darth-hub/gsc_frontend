import React from 'react'
import Customer_Review_Card from './Components/Customer_Review_Card'


const Customer_Review = () => {
  return (
    <div className='bg-[#1B2316] w-full pb-15  flex flex-col gap-10 items-center text-white'>
        <div className='flex justify-center'><hr className='w-[90vw]'></hr></div>

        <div>
            <h1 className='text-5xl'>TESTIMONIALS</h1>
        </div>

        <div className=' px-10 w-full h-full flex justify-center gap-5 flex-wrap'>
            <Customer_Review_Card />
        </div>
      
    </div>
  )
}

export default Customer_Review

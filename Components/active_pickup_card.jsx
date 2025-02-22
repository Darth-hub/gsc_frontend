import React from 'react'
import delivery from "../Components/images/delivery-box.png"

const active_pickup_card = () => {
  return (
    <div className='bg-[#ffffff] h-[220px] w-full flex items-end'>
                    <div><img src={delivery} className='absolute -top-14 right-0 z-20 scale-[0.15]' /></div>
                    <div className='bg-amber-300 rounded relative h-[80%] w-full'>
                        <div className='bg-black w-[35%]  h-[18%] text-white grid place-content-center rounded absolute bottom-1 right-1'><span className='text-[0.8em]'>scheduled</span></div>
                        <div className='p-6 px-7 flex flex-col gap-1'>
                        <div className=' flex gap-1'>
                                <div><h2>Category :</h2></div>
                                <div className='font-medium'><span>Books</span></div>
                            </div>
                            <div className=' flex gap-1'>
                            <div><h2>Scheduled Pick Up :</h2></div>
                            <div className='font-medium'><span> Monday</span><span>,</span><span>23 March 2024</span></div>
                            </div>
                            <div className=' flex gap-1'>
                            <div><h2>Pick Up Date :</h2></div>
                            <div className='font-medium'><span> Monday</span><span>,</span><span>23 March 2024</span></div>
                            </div>
                            <div className=' flex gap-1'>
                                <div><h2>Estimated Weight :</h2></div>
                                <div className='font-medium'><span>5kgs</span></div>
                            </div>
                            <div className=' flex gap-1'>
                                <div><h2>Price :</h2></div>
                                <div className='font-medium'><span>Rs 20</span></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
  )
}

export default active_pickup_card

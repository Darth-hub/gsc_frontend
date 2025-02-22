import React from 'react'
import active_pickup_card from '../../../Components/active_pickup_card'
import delivery from "../../../Components/images/delivery-box.png"


const User_profile = () => {
  return (
    <>
    <div className='bg-[#1B2316] w-full h-screen flex justify-center gap-5 items-center'>
        <div className='bg-gray h-[95%] w-[25%] flex flex-col mt-30 items-center'>
            <div className=' w-[80%] h-[200px]'>
                <div className=' w-[30%] aspect-square rounded'>
                    <img src="https://i.pinimg.com/originals/68/0e/24/680e241336ae8d3a57a42f54b656e58f.jpg" className='rounded' alt="" />
                </div>
                <div className='mt-2'>
                    <h2 className='text-3xl font-medium'>Ayush Kumar</h2>
                    <h5 className='text-[#8D918B]'>ayush@email.com</h5>
                </div>
            </div>
            <div className=' mt-10 text-xl text-[#8D918B] flex flex-col gap-2 font-medium w-[80%] h-[250px]'>
                <a href="" ><h2 className='hover:translate-x-2 duration-300 ease-in'>Home</h2></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>DashBoard</h2></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>Account</h2></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>Setting</h2></a>
            </div>
        </div>


        <div className='bg-gray-300 h-[95%] flex w-[65%] rounded-2xl text-black'>
            <div className='bg-white h-full w-[75%] relative flex flex-col rounded-l-2xl pr-50 p-10'>
                <div><h1 className='text-4xl'>DASHBOARD</h1></div>
                <div>
                <div className='mt-9'>
                    <h2>View Your Active Pickups</h2>
                    <hr />
                </div>
                <div className='bg-[#ffffff] h-[220px] w-full flex items-end'>
                    <div><img src={delivery} className='absolute -top-16 -right-2 z-20 scale-[0.15]' /></div>
                    <div className='bg-[#EDF0F6] rounded relative h-[80%] w-full'>
                        <div className='bg-black w-[35%]  h-[18%] text-white grid place-content-center rounded absolute bottom-1 right-1'><span className='text-[0.8em]'>scheduled</span></div>
                        <div className='p-4 px-7 flex flex-col gap-1'>
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
                </div>

                <div>
                <div className='mt-9'>
                    <h2>View Your Past Pickups</h2>
                    <hr />
                </div>
                <div className='bg-[#ffffff] h-[220px] relative  w-full flex items-end'>
                    
                    <div className='bg-[#EDF0F6] rounded relative h-[80%] w-full'>
                    <div><img src={delivery} className='absolute  -top-53 -right-44 z-20 scale-[0.17]' /></div>
                        <div className='bg-black w-[35%]  h-[18%] text-white grid place-content-center rounded absolute bottom-1 right-1'><span className='text-[0.8em]'>picked up</span></div>
                        <div className='p-4 px-7 flex flex-col gap-1'>
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
                </div>
                
                
            </div>
            
            <div className='bg-[#EDF0F6] px-10 py-20 w-[35%] rounded-xl' >
                <h1 className='text-3xl'>Explore more</h1>
                <p>View Campaigns</p>
            </div>
        </div>

        <div>
            
        </div>

    </div>
    </>
  )
}

export default User_profile

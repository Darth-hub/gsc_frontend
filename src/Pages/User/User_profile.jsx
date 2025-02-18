import React from 'react'

const User_profile = () => {
  return (
    <>
    <div className='bg-[#1B2316] w-full h-screen flex justify-center gap-5 items-center'>
        <div className='bg-gray h-[95%] w-[25%] flex flex-col mt-30 items-center'>
            <div className=' w-[80%] h-[200px]'>
                <div className=' w-[30%] aspect-square rounded'>
                    <img src="https://avatarfiles.alphacoders.com/374/374257.jpeg" className='rounded' alt="" />
                </div>
                <div className='mt-2'>
                    <h2 className='text-3xl font-medium'>Ayush Kumar</h2>
                    <h5 className='text-[#8D918B]'>ayush@email.com</h5>
                </div>
            </div>
            <div className=' mt-10 text-xl text-[#8D918B] flex flex-col gap-2 font-medium w-[80%] h-[250px]'>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>Home</h2></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>DashBoard</h2></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>Account</h2></a>
                <a href="" className='hover:translate-x-2 duration-300 ease-in'><h2>Setting</h2></a>
            </div>
        </div>
        <div className='bg-gray-300 h-[95%] w-[65%] rounded-2xl'>

        </div>
    </div>
    </>
  )
}

export default User_profile

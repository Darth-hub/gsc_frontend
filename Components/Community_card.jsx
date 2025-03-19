import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

const Community_card = () => {
  return (
    <>
    <div className='w-[30%] relative aspect-video bg-gray-100 text-black p-2 rounded'>
        <div className='h-[70%] object-contain  overflow-hidden'>
            <img src="https://images.unsplash.com/photo-1528323273322-d81458248d40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZSUyMHdhc3RlfGVufDB8fDB8fHww" className='relative -top-5 '  alt="" />
        </div>
        <div className='mt-2 text-[#277868]'>
            <h1>Prayagraj, IIIT Allahabad</h1>
            <span>2k members</span>
        </div>
        <div>
        <Link smooth to="/Join_community">
        <button class='bg-[#277868] duration-150 ease-linear hover:scale-[1.1] text-amber-50 cursor-pointer absolute right-3 bottom-1 rounded w-[35%] '><p class="text"><span className='text-[0.9em] text-center'>View Details</span></p></button>
        </Link>
        </div>

    </div>
    </>
  )
}

export default Community_card

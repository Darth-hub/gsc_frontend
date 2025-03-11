import React from 'react'
import Community_card from '../../Components/Community_card'


const Community = () => {
  return (
    <>
    <div className=' w-screen h-screen p-10'>
         <div className='flex gap-5 text-3xl w-full'>
            <div><i class="ri-arrow-left-line"></i></div>
            <div><h1><span>JOIN COMMUNITY</span></h1></div>
         </div>
         <div className=' w-full flex flex-wrap justify-around items-start gap-5 h-[90%] p-3 mt-5'>
            <Community_card />
            <Community_card />
            <Community_card />
            <Community_card />
            <Community_card />

         </div>
    </div>
    
    </>
  )
}

export default Community

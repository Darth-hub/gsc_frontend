import React from 'react'
import Header from '../../../Components/Header'
import "../../App.css"
import Item_detail_card from '../../../Components/Item_detail_card'


const View_pickups = () => {
  return (
    <div className='h-screen w-screen bg-[#222C1D] flex flex-col items-center gap-8'>
        <div className='flex w-screen gap-25 justify-center items-center '>
            <Header />
            <button class="border h-8 px-5 mr-27 rounded-lg mt-6"><p class="text">Profile</p></button>
        </div>

        <div className='w-[90vw] flex gap-20 items-center'>
            <div>
            <h1 className='text-2xl'>SCHEDULED PICKUPS</h1>
            </div>
            <div class="wrap-input-17">
                <div class="search-box">
                        <button class="btn-search">🔍</button>
                     <input type="text" class="input-search" placeholder="Search by name..." />
                </div>
            </div>
        </div>

        <div className='bg-amber-400 w-[90vw] h-[50vh] flex flex-col items-center justify-center'>
            
        </div>
        
      
    </div>
  )
}

export default View_pickups

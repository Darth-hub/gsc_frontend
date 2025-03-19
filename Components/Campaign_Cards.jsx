import React from 'react'
import "./Component.css"

const Campaign_Cards = () => {
  return ( 
    <div class="campaignCard flex-col py-5 px-5 gap-5 w-[25%] h-[90%] text-white">
        <div className='w-[90%]'>
            <img src="https://img.freepik.com/free-photo/group-cleaning-workers-collecting-trash-outdoors_1262-21049.jpg?t=st=1739283222~exp=1739286822~hmac=51c4ce42b5733cb9ff7c7df9a8a1ab3b954f591082f0ad2eadb0b3e24ea3a741&w=996" className='rounded-[10px]' />
        </div>

        <div>
            <h1 className='text-xl'>Waste to Worth</h1>
        </div>

        <div>
            <p>"Recycle Today for a Greener Tomorrow!"

E-waste is growing at an alarming rate. Every device you recycle helps reduce pollution and conserve valuable resources. Together, we can build a cleaner, greener future! 🌱💚 #RecycleForTomorrow #SustainableLiving"</p>
        </div>
    </div>
  )
}

export default Campaign_Cards

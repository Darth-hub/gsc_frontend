import React from 'react'
import Star from './Star'


const Customer_Review_Card = () => {
  return ( 
    <div class="flex flex-col gap-2 h-[35%]  max-w-[40%] w-full bg-[#272E22]  p-5 rounded-md  shadow-md hover:scale-105 hover:duration-150 duration-150">
  <div class="flex flex-row justify-between w-full">
    <div class="flex flex-row justify-between w-full">
      <p class="text-xs">Ayush Kumar</p>
      <p class="text-xs">Febrauary 10, 2025</p>
    </div>
  </div>
  <div class="flex flex-row justify-between w-full">
    <h3 class="text-xl font-bold">Great Experience!</h3>

    <div class="text-xs">
      <div class="flex flex-row gap-2 " >
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        
      </div>
    </div>
  </div>

  <div class="text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
    odio vitae vestibulum. Donec in efficitur ipsum, sed dapibus eros.
  </div>
    </div>

  )
}

export default Customer_Review_Card

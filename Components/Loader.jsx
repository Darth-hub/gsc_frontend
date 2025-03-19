import React from 'react'
import PreLoader from "../Components/images/Loader2.gif"

const Loader = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
        <img src={PreLoader} alt="Loading animation" />
      
    </div>
  )
}

export default Loader

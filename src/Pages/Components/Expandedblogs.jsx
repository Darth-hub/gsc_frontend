import React from 'react'
import cancel from '/images/cancel.png'
import { useLocation, useNavigate } from "react-router-dom";

const Expandedblogs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const blog = location.state?.blog ;

  return (
    <div className='w-[100vw] h-[100vh] bg-black'>
        <div class="h-[90vh] bg-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center tran absolute w-[90vw] p-10 rounded-2xl ">
        <button onClick={() => navigate(-1)}><img src={cancel} alt="" className='w-[40px] cursor-pointer absolute top-5 right-5 ' /></button>
    <p class="text-4xl mb-5">{blog.title}</p>
      <div class="main-content">
        <p class="heading" className='text-m'>{blog.description} </p>
      </div>
  <div class="mt-10">{blog.author.name} </div>
</div>
    </div>
  )
}

export default Expandedblogs  
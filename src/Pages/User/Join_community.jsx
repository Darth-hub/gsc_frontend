import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { HashLink as Link } from "react-router-hash-link";


const Join_community = () => {
  return (
    <>
    <div className=''>
    <div className='p-8 text-5xl flex gap-4'>
    <Link smooth to="/community"><i class="ri-arrow-left-line"></i></Link>
        <h1>JOIN COMMUNITY</h1>
    </div>
    <div className='w-[100vw] h-[250px] bg-[#1D4532] p-5 px-15 flex gap-15'>
      <div >
        <img src="https://img.freepik.com/premium-photo/recycle-bin-full-electronic-wastes-as-concept-e-waste-management_1041953-14144.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" alt="" className='object-contain h-[220px]'  />
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='text-[#55B000] text-3xl'>E-WASTE KA CHAKRA</h1>
        </div>
        <div>
          <p>Indian Institute of Information Technology,Allahabad</p>
          <p>UTTAR PRADESH,INDIA </p>
        </div>
        <div className='flex gap-8'>
          <div>
            <button className='bg-white text-[#277868] rounded-xl px-2 py-1 font-semibold text-[0.80em]'>Community Chat</button>
          </div>
          <div>
            <button className='bg-white text-[#277868] rounded-xl px-2 py-1 font-semibold text-[0.80em]'>Reviews</button>
          </div>
          <div>
            <button className='bg-[#277868] text- rounded-xl px-4 py-1 font-semibold text-[0.80em]'>Register</button>
          </div>
        </div>
        <div className='flex gap-1 text-[#C5CFCB]'>
        <div><i class="ri-timer-2-line"></i></div>
        <div>
          <p>Registration Deadline</p>
          <p>25 days left</p>
        </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col items-center'>
      <div className='bg-white mt-4 text-black h-[40px] px-30 items-center flex gap-10 w-[99%]'>
        <a href="">ABOUT</a>
        <a href="">POSTS</a>
        <a href="">PEOPLE</a>
        <a href="">REVIEWS</a>
      </div>
      <div className='w-[99%] h-[250px] p-2  flex gap-2'>
      <img src="https://img.freepik.com/free-vector/background-with-ecology-recycling-concept_23-2148234397.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" className='h-[240px] aspect-square' alt="" />
      <img src="https://img.freepik.com/free-vector/background-with-ecology-recycling-concept_23-2148234397.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" className='h-[240px] aspect-square' alt="" />
      <img src="https://img.freepik.com/free-vector/background-with-ecology-recycling-concept_23-2148234397.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" className='h-[240px] aspect-square' alt="" />
      <img src="https://img.freepik.com/free-vector/background-with-ecology-recycling-concept_23-2148234397.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" className='h-[240px] aspect-square' alt="" />
      <img src="https://img.freepik.com/free-vector/background-with-ecology-recycling-concept_23-2148234397.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" className='h-[240px] aspect-square' alt="" />
      <img src="https://img.freepik.com/free-vector/background-with-ecology-recycling-concept_23-2148234397.jpg?uid=R155388462&ga=GA1.1.185072260.1729263717&semt=ais_hybrid" className='h-[240px] aspect-square' alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Join_community

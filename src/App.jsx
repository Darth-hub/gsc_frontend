import React from 'react'
import './App.css'
import Home from '../Components/Home'
import Blogs from '../Components/Blogs'


const App = () => {
  return (
    <>
    <Home />
    <div className='w-full flex justify-center'>
    <div className='w-[90%] my-23 h-[1px] bg-white'>
    </div>
    </div>
    <Blogs />
    </>
  )
}

export default App

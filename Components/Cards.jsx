import React from 'react'
import "../src/App.css"

const Cards = ({title, content}) => {
  return (
  <div class="card h-[55vh] w-[30vw] py-5 rounded-2xl">
    <p class="header">What is E-Waste?</p>
      <div class="main-content">
        <p class="heading" className='text-m'>E-waste refers to discarded electrical or electronic devices. This includes everything from outdated smartphones and computers to batteries, chargers, televisions, and even household appliances like refrigerators and washing machines. According to studies, the world generates around 50 million tons of e-waste annually, and only a small fraction of it is properly recycled.</p>
      </div>
  <div class="footer">by Ayush</div>
</div>

  )
}

export default Cards

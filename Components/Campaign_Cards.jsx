import React from 'react'
import "./Component.css"

const Campaign_Cards = () => {
  return ( 
    <div class="campaignCard flex-col py-5 px-5 gap-5 w-[25%] h-[90%]">
        <div className='w-[90%]'>
            <img src="https://img.freepik.com/free-photo/group-cleaning-workers-collecting-trash-outdoors_1262-21049.jpg?t=st=1739283222~exp=1739286822~hmac=51c4ce42b5733cb9ff7c7df9a8a1ab3b954f591082f0ad2eadb0b3e24ea3a741&w=996" className='rounded-[10px]' />
        </div>

        <div>
            <h1 className='text-xl'>Swachh Bharat</h1>
        </div>

        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit vel, ad quasi ipsam ut dolorum tempora libero recusandae consequuntur, quas nihil. Non fugiat corporis ex dolor nulla, facilis consequatur tempora!</p>
        </div>
    </div>
  )
}

export default Campaign_Cards

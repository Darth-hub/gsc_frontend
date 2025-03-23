import React from 'react'
import Cards from '../../Components/Cards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Blogs = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };

  return (
    <div class="Blog w-full h-[100vh]   ">
        <div className='text-center text-white text-5xl pt-8'>
            <h1>BLOGS</h1>
        </div>

        <div className='w-[98vw] h-[500px] mt-20'>
        <Cards />
        </div>
    </div>
  )
}

export default Blogs

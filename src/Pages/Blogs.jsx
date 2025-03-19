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
    <div class="Blog w-full h-[100vh] text-white    ">
        <div className='text-center text-5xl pt-8'>
            <h1>BLOGS</h1>
        </div>

        <div className='h-[75%] w-[95%] pt-15 mx-auto'>
            <Slider {...settings}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            </Slider>
        </div>
    </div>
  )
}

export default Blogs

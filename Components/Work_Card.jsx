import React, { useContext } from "react";
import { WorkContext } from "../src/Pages/WorkContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Work_Card = () => {
    const { work } = useContext(WorkContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Hides prev/next arrows if you only want dots
    };

    return (
        <div className="w-[90vw] mx-auto">
            <Slider {...settings}>
                {work.map((workItem, index) => (
                    <div key={index} className="relative w-full h-[500px] overflow-hidden rounded-xl bg-[#272E22]">
                        <div className="absolute flex items-center px-10 gap-10 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[rgb(39,46,34)]">
                            <div className="h-[80%] bg- aspect-square">
                                <img 
                                    src={workItem.image} 
                                    className="object-contain rounded-xl" 
                                    alt="Work Step"
                                />
                            </div>

                            <div className="border-2 rounded-lg w-full text-center p-5 px-10 h-[80%]">
                                <h1 className="text-3xl pb-10">{workItem.title}</h1>
                                <p>{workItem.description}</p>
                            </div>
                        </div>

                        <div className="absolute w-full h-[50%] bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                        <div className="absolute w-full h-[50%] bg-white blur-[50px] -right-1/2 -bottom-1/2"></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Work_Card;

import React from 'react';
import Work_Card from '../../Components/Work_Card';



const How_We_Work = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div id="about" className='bg-[#1B2316] w-full h-[100vh] pb-16 flex flex-col gap-10 items-center'>
            <div className='flex justify-center'><hr className='w-[90vw]'></hr></div>

            <div>
                <h1 className='text-5xl text-white'>How We Work</h1>
            </div>

            <div className='w-full flex justify-center flex-wrap items-start h-full'>
                    <div> <Work_Card /> </div>  
            </div>
        </div> 
    );
};

export default How_We_Work;

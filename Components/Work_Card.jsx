import React from 'react';

const Work_Card = () => {
  return (
    <div className="relative w-[100%] h-[500px] overflow-hidden rounded-xl bg-[#272E22]">
        <div className="absolute flex items-center px-10 gap-10 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[rgb(39,46,34)]">
            <div className='h-[80%] aspect-square'>
                <img src="https://img.freepik.com/free-vector/ecology-realistic-illustration_98292-7312.jpg?t=st=1739287719~exp=1739291319~hmac=265845a15bf43d29f6f138c819527fe74908934ec69e70d1e7ecfb9e8e4237b6&w=740" className='object-contain rounded-xl' alt="" />
            </div>

            <div className='border-2 rounded-lg w-full text-center p-5 px-10 h-[80%]'>
                <div>
                    <h1 className='text-3xl pb-10'>HOW WE WORK</h1>
                </div>
                <div>
                    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maxime. Odit vel neque, error dignissimos repellat, natus illo, a aliquid deleniti nemo totam! Facilis magni corporis cum nemo, nobis tempore.
                    Aliquam veritatis illo voluptatibus quos, corporis commodi sunt consequuntur repudiandae vitae cum nesciunt, totam iure necessitatibus quam qui. Corporis quos incidunt, non aliquid dicta nesciunt officia sapiente deleniti pariatur est!
                    Eum itaque quas aliquid. Nam enim architecto nihil velit nostrum, excepturi dignissimos officiis molestiae nisi laborum perspiciatis sunt eaque omnis quibusdam aut vero laudantium. Corrupti nobis sequi reprehenderit ad excepturi! ipsum, dolor sit amet consectetur adipisicing elit. Aperiam commodi expedita at optio nostrum ducimus non unde, iste quia animi tempore labore doloribus et adipisci ad illum?</p>
                </div>
            </div>
        </div>

        <div className="absolute w-[100%] h-[50%] bg-white blur-[50px] -left-1/2 -top-1/2"></div>
        <div className="absolute w-[100%] h-[50%] bg-white blur-[50px] -right-1/2 -bottom-1/2"></div>
    </div>
  );
}

export default Work_Card;

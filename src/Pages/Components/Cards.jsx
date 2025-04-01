import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../App.css";
import { Link } from "react-router-dom";
import { BlogContext } from "../User/Blogdata";


const Cards = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="h-auto flex">
      <Swiper 
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="scale-90">
            <Link smooth to={`/blog`} state={{blog}}> {/* Pass blog data as state */}
              <button className="card h-[55vh] flex text-center w-[30vw] py-5 rounded-2xl shadow-lg bg-white">
                <div className="p-4">
                  <p className="header text-3xl text-center font-semibold">{blog.title.substring(0,50)}...</p>
                  <p className="text-m mt-2 ">{blog.description.substring(0, 200)}...</p>
                </div>
                <div className="footer text-sm mt-4">
                  by {blog.author.name} on {blog.author.date}
                </div>
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
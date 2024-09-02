import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import carousel from "../../assets/carousel6.jpg"; 
import carousel2 from "../../assets/desert.webp"; 
import carousel3 from "../../assets/img7.jpg"; 
import carousel4 from "../../assets/img3.jpg"; 

const images = [
  {
    src: carousel,
    text: "Without care, even the greenest fields can fade into lifeless sands.",
  },
  {
    src: carousel2,
    text: "When the last tree falls, the land turns into a wasteland.",
  },
  {
    src: carousel3,
    text: "With each seed, we renew our promise to the planet.",
  },
  {
    src: carousel4,
    text: "Together, we can bring life back to the land and create a legacy of green.",
  },
];

const Hero = () => {
  return (
    <div className="w-full mx-auto mt-10 mb-6 py-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={item.src}
              alt={`Carousel Slide ${index + 1}`}
              className="w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center">
              <div className="typewriter">
                <h2 className="text-white text-4xl font-bold mt-[25px]">
                  {item.text}
                </h2>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

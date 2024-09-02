// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import carousel from "../../assets/carousel6.jpg"; 
// import carousel2 from "../../assets/desert.webp"; 
// import carousel3 from "../../assets/img7.jpg"; 
// import carousel4 from "../../assets/img3.jpg"; 

// const images = [
//   {
//     src: carousel,
//     text: "Without care, even the greenest fields can fade into lifeless sands.",
//   },
//   {
//     src: carousel2,
//     text: "When the last tree falls, the land turns into a wasteland.",
//   },
//   {
//     src: carousel3,
//     text: "With each seed, we renew our promise to the planet.",
//   },
//   {
//     src: carousel4,
//     text: "Together, we can bring life back to the land and create a legacy of green.",
//   },
// ];

// const Hero = () => {
//   return (
//     <div className="w-full mx-auto mt-10 mb-6 py-10">
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4500 }}
//         loop={true}
//         modules={[Navigation, Pagination, Autoplay]}
//         className="rounded-lg overflow-hidden"
//       >
//         {images.map((item, index) => (
//           <SwiperSlide key={index} className="relative">
//             <img
//               src={item.src}
//               alt={`Carousel Slide ${index + 1}`}
//               className="w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] object-cover"
//             />
//             {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center">
//               <div className="typewriter">
//                 <h2 className="text-white text-4xl font-bold mt-[25px]">
//                   {item.text}
//                 </h2>
//               </div>
//             </div> */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;



import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import image2 from '../../assets/grow-tree2.avif'; 
import image3 from '../../assets/grow-tree.avif'; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useEffect(()=>{
    gsap.fromTo(".content-box",
      {y:100, opacity:0},
      {
        y:0,
        opacity:1,
        duration:1,
        ease:"power2.inOut"
      }
    )
    gsap.fromTo(".img-box",
      {y:-100, opacity:0},
      {
        y:0,
        opacity:1,
        duration:1,
        ease:"power2.inOut"
      }
    )
  })

  return (
    <div className="hero flex flex-col md:flex-row items-center w-full bg-black bg-opacity-55 p-8 pt-36">
      <div className="md:w-1/2 w-full text-white content-box">
        <h1 className="text-4xl mb-4 font-bold">
          Welcome to Our Mission
        </h1>
        <p className="text-lg mb-6">
          We are dedicated to restoring our planet's natural beauty.
          <br /> Join us in making a difference.
        </p>
        {/* <div className="space-x-4">
          <NavLink
            to="/donate"
            className="inline-block text-white bg-yellow-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg w-28 text-center py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Donate
          </NavLink>
        </div> */}
      </div>
      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="relative content-box w-full h-44 bg-gradient-to-r from-green-900 to-green-500 text-white text-sm p-4 flex flex-col justify-between rounded-lg">
            <h3 className="text-sm md:text-lg font-bold md:font-semibold md:mb-2">
              Protecting Our Planet
            </h3>
            <p className="md:mb-4 text-xs">
              Our planet’s future starts with you. Let’s work together to protect it.
            </p>
            <NavLink
              to="/about"
              className="inline-block text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-center py-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-2"
            >
              Learn More
            </NavLink>
            {/* Horizontal line at the bottom */}
            <div className="absolute -bottom-6 left-0 w-full px-5">
              <hr className="border-t-2 border-green-800" />
            </div>
          </div>
          <img src={image2} alt="Image 2" className="w-full h-52 object-cover rounded-lg img-box" />
          <img src={image3} alt="Image 3" className="w-full h-52 object-cover rounded-lg img-box" />
          <div className="relative content-box w-full h-44 bg-gradient-to-r from-green-500 to-green-900 text-white text-sm p-4 flex flex-col justify-between rounded-lg mt-8">
            {/* Horizontal line at the top */}
            <div className="absolute -top-6 left-0 w-full px-5">
              <hr className="border-t-2 border-green-800" />
            </div>
            <h3 className="text-sm md:text-lg font-bold md:font-semibold md:mb-2">
              Join Our Efforts
            </h3>
            <p className="md:mb-4 text-xs">
              Every action counts. Let’s turn our passion into purpose and make a lasting impact.
            </p>
            <NavLink
              to="/donate"
              className="inline-block text-white bg-green-800 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-center py-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-2"
            >
              Get Involved
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import testimonials from '../../data/testimonial';
import './swiper-custom.css'; // Ensure this file is correctly imported
import { BiSolidQuoteRight } from 'react-icons/bi';
import headlogo1 from '../../assets/flower-pot.png';

const Testimonials = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="heading01"> What Our Clients Say</div>

        <img src={headlogo1} className="h-14 inline" alt="" />
      </div>
      <div className="w-full mx-auto mt-12 mb-12 px-4 lg:px-16">
        <Swiper
          spaceBetween={30}
          speed={1000}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="rounded-lg overflow-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 mx-2 my-3 bg-gray-50 shadow-md rounded-lg text-center relative h-64">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full border-x-4 border-lime-800 mb-4 object-cover"
                />
                <BiSolidQuoteRight className="mx-auto text-primary" />

                <p className="text-lg font-semibold mb-2 text-gray-800">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm  font-bold">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;

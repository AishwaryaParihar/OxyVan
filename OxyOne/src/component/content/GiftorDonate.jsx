import React from 'react';
import charity from '../../assets/charity.gif';
import donate from '../../assets/donat (1).gif';
import donate2 from '../../assets/donat (2).gif';
import { Link } from 'react-router-dom';

const GiftorDonate = () => {
  return (
    <div className='bg-gradient-to-r from-green-700 to-green-900 px-4 py-5 md:px-14'>
      <div className="heading text-center">
        <h2 className='pt-6 font-bold text-gray-900 text-2xl md:text-3xl'>
          <span className="text-white">Gifting</span> ❤️  & Donation
        </h2>
        <p className="py-4 text-white text-lg md:text-2xl">
          All donations and gifts go towards the “OxyVan” fund and will result in a matching number of saplings planted in your name.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8 px-6 md:px-16 pb-6">
        {/* Donate Money Section */}
        <Link to="/donate" className="md:w-1/3 w-full text-center border border-white flex flex-col rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center h-full mt-4">
            <img src={donate} alt="Donate Money" className='w-40 h-40 md:w-48 md:h-48' />
          </div>
          <h4 className="py-4 text-white text-lg md:text-xl font-semibold">
          Support Financially</h4>
        </Link>

        {/* Donate Tree Section */}
        <Link to="/donate" className="md:w-1/3 w-full text-center border border-white flex flex-col rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center h-full mt-4">
            <img src={charity} alt="Donate Tree" className='w-40 h-40 md:w-48 md:h-48' />
          </div>
          <h4 className="py-4 text-white text-lg md:text-xl font-semibold">Donate Tree</h4>
        </Link>

        {/* Donate Land Section */}
        <Link to="/donate" className="md:w-1/3 w-full text-center border border-white flex flex-col rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center h-full mt-4">
            <img src={donate2} alt="Donate Land" className='w-40 h-40 md:w-48 md:h-48' />
          </div>
          <h4 className="py-4 text-white text-lg md:text-xl font-semibold">Donate Land</h4>
        </Link>
      </div>
      <p className="py-4 text-white text-lg md:text-xl text-center">
      For land gifting , kindly email us at <a href="mailto:oxyvan65@gmail.com" className='underline'>oxyvan65@gmail.com</a>
        </p>
    </div>
  );
};

export default GiftorDonate;

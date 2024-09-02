import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../data/footer';


const Footer = () => {
  return (
    <div className='w-full h-20 bg-white sticky bottom-0 shadow z-20  block md:hidden'>
      <ul className='flex w-full h-full items-center justify-between px-8 py-2'>
        {footerData?.map(({ title, icon, href }, index) => (
          <li className='h-full' key={index}>
            <Link to={href}>
              <div className="flex flex-col items-center  justify-evenly gap-1 h-full ">
                <span className="text-3xl hover:text-green-700">{icon}</span>
                <span className='text-black/70 text-sm'>{title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
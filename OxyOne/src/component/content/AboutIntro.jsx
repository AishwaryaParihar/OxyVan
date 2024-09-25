import React, { useEffect } from 'react';
import hero from '../../assets/hero.webp';
import { gsap } from 'gsap';


const AboutIntro = () => {
  useEffect(() => {
    gsap.fromTo(
      '.intro-text',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="relative">
      <img src={hero} alt="Hero" className="w-full h-[63vh] md:h-[85vh] lg:h-[100vh] object-cover rotate-180" />

      <div className="absolute top-[30%] right-4 md:right-8 lg:right-12 w-11/12 sm:w-3/4 md:w-1/2 bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-sm intro-text">
        <div className="text-justify">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight md:leading-snug lg:leading-relaxed">
            The Oxyvan is a global environmental nonprofit working to create a world where people and nature can thrive.
          </h2>
          <p className="mt-4 text-xs sm:text-base md:text-lg">
          At Oxyvan, we envision a future where the health of our planet is paramount. We believe that the well-being of people is intrinsically linked to the health of our environment. By focusing on sustainable practices and large-scale environmental restoration, we aim to foster a harmonious relationship between people and nature, ensuring a livable planet for future generations. Our mission is to restore the balance between human life and the natural world by protecting, preserving, and rejuvenating the planet’s ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;

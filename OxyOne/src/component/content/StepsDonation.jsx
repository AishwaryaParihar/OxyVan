import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import headlogo1 from '../../assets/flower-pot.png';
import img1 from '../../assets/donate1.svg';
import img2 from '../../assets/donate2.svg';
import img3 from '../../assets/donate3.svg';
import img4 from '../../assets/donate4.svg';
import img5 from '../../assets/donate5.svg';
import img6 from '../../assets/donate6.svg';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { img: img1, title: 'You Donate Online', highlight: 'Donate' },
  { img: img2, title: 'We Pool Donations', highlight: 'Pool' },
  { img: img3, title: 'Our nurseries grow saplings', highlight: 'grow' },
  { img: img4, title: 'Teams plant trees during monsoons', highlight: 'plant trees' },
  { img: img5, title: 'Trees are maintained & monitored', highlight: 'maintained' },
  { img: img6, title: 'Reports on Impact generated', highlight: 'Impact' },
];

const StepsDonation = () => {
  const stepRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      stepRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: stepRefs.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="px-4 py-8 lg:px-16">
      {/* Header Section */}
      <div className="flex justify-center items-center mb-8">
        <h2 className="heading01">
          Where does your donation go?
        </h2>
        <img src={headlogo1} className="h-12" alt="Donation" />
      </div>

      {/* Responsive Grid for Images and Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center"
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <div className="">
              <img
                src={step.img}
                alt={`Donation Step ${index + 1}`}
                className="w-40 h-40 mx-auto object-contain mb-4"
              />
              <h6 className="text-lg text-gray-700">
                {step.title.split(step.highlight)[0]}
                <span className="text-green-700 font-bold">
                  {step.highlight}
                </span>
                {step.title.split(step.highlight)[1]}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsDonation;

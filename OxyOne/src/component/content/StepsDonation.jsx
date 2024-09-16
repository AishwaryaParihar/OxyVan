import React from 'react';
import headlogo1 from '../../assets/flower-pot.png';
import img1 from '../../assets/donate1.svg';
import img2 from '../../assets/donate2.svg';
import img3 from '../../assets/donate3.svg';
import img4 from '../../assets/donate4.svg';
import img5 from '../../assets/donate5.svg';
import img6 from '../../assets/donate6.svg';

const steps = [
  { img: img1, title: 'You Donate Online', highlight: 'Donate' },
  { img: img2, title: 'We Pool Donations', highlight: 'Pool' },
  { img: img3, title: 'Our nurseries grow saplings', highlight: 'grow' },
  { img: img4, title: 'Teams plant trees during monsoons', highlight: 'plant trees' },
  { img: img5, title: 'Trees are maintained & monitored', highlight: 'maintained' },
  { img: img6, title: 'Reports on Impact generated', highlight: 'Impact' },
];

const StepsDonation = () => {
  return (
    <div className="px-4 py-8 md:px-14">
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
          <div key={index} className="text-center">
            <div className="border-b-4 border-green-500 py-4 bg-white shadow-md rounded-lg h-full">
              <img
                src={step.img}
                alt={`Donation Step ${index + 1}`}
                className="w-40 h-40 mx-auto object-contain mb-4"
              />
              <h6 className="text-lg text-gray-700">
                {step.title.split(step.highlight)[0]}
                <span className="text-green-600 font-bold">
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

import React from 'react';
import headlogo1 from '../../assets/flower-pot.png';
import img1 from '../../assets/spent1.svg';
import img2 from '../../assets/spent2.svg';
import img3 from '../../assets/spent3.svg';
import img4 from '../../assets/spent4.svg';
import img5 from '../../assets/spent5.svg';
import img6 from '../../assets/donate6.svg';

const steps = [
  { img: img1, title: 'Average cost of sapling', highlight: 'sapling', price: '24' },
  { img: img2, title: 'Cost of plantation (land prep, transport, labor, manure, equipment)', highlight: 'plantation', price: '36' },
  { img: img3, title: 'Support staff & admin cost', highlight: 'Support staff', price: '25' },
  { img: img4, title: 'Technology & software', highlight: 'Technology', price: '2' },
  { img: img5, title: 'Average cost of plantation & maintenance for one-year', highlight: 'plantation & maintenance', price: '96' },
];

const StepsSpent = () => {
  return (
    <div className="px-4 py-8 md:px-14">
      {/* Header Section */}
      <div className="flex justify-center items-center mb-8">
        <h2 className="heading01">How is it Spent?</h2>
        <img src={headlogo1} className="h-12" alt="Donation" />
      </div>

      {/* Responsive Grid for Images and Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col justify-between text-center h-full bg-white border-b-4 border-green-500 shadow-md rounded-lg p-4">
            {/* Image and Title */}
            <div>
              <img
                src={step.img}
                alt={`Donation Step ${index + 1}`}
                className="w-40 h-40 mx-auto object-contain mb-4"
              />
              <h6 className="text-lg text-gray-700">
                {step.title.split(step.highlight)[0]}
                <span className="text-green-600 font-bold">{step.highlight}</span>
                {step.title.split(step.highlight)[1]}
              </h6>
            </div>

            {/* Button at the Bottom */}
            <div className="mt-4">
              <button className="border-black border rounded-md p-1 px-8 font-bold">
                ₹ {step.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSpent;

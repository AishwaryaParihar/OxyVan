import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';
import DonerForm from './DonerForm';
import headlogo1 from '../../assets/flower-pot.png';
import TreeDonate from './TreeDonate';

const Register = () => {
  const [formType, setFormType] = useState('tree');

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  return (
    <>
      <div className="w-full mt-20 px-12">
        <div className="flex justify-center">
          <h2 className="heading01 font-bold mb-8 md:text-3xl">
            {' '}
            Donate What Your ❤️ Want{' '}
          </h2>

          <img src={headlogo1} className="h-14 inline" alt="" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/3">
            <button
              className={`w-full py-2 font-semibold ${
                formType === 'tree' ? 'bg-primary' : 'bg-green-700'
              } text-white`}
              onClick={() => handleButtonClick('money')}
            >
              Donate Money
            </button>                                                                                
          </div>
          <div className="w-1/3">
            <button
              className={`w-full py-2 font-semibold ${
                formType === 'land' ? 'bg-primary' : 'bg-green-700'
              } text-white`}
              onClick={() => handleButtonClick('tree')}
            >
              Donate Tree
            </button>
          </div>
          <div className="w-1/3">
            <button
              className={`w-full py-2 font-semibold ${
                formType === 'money' ? 'bg-primary' : 'bg-green-700'
              } text-white`}
              onClick={() => handleButtonClick('land')}
            >
              Donate Land
            </button>
          </div>
        </div>

        <div className="mt-8">
          {formType === 'money' && (
            <div className="rounded-lg shadow-md">
              {/* Tree donation form */}
              <TreeDonate />
            </div>
          )}

          {formType === 'land' && (
            <div className="p-6 contactbg rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Land Donation Form
              </h3>
              {/* Land donation form */}
              <DonerForm />
            </div>
          )}

          {formType === 'money' && (
            <div className="p-6 contactbg rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Money Donation Form
              </h3>
              {/* Money donation form */}
              <DonerForm />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;

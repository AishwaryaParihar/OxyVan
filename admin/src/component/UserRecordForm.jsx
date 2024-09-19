import React, { useState } from 'react';

const handleInputs = () =>{
    const [formData , setFormData] = useState({
        name:'',
        number:'',
        donationType:'',
        tree:'',
        money:'',
        land:'',

    })
}

const UserRecordForm = () => {
  const [donationType, setDonationType] = useState('');
  
  // Handler for dropdown change
  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value);
  };

  

  return (
    <>
      <div className="p-6 w-full mx-auto shadow-lg rounded-lg">
        <form action="" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-700">Name: </label>
            <input 
              type="text" 
              name="name" 
              className="p-2 border border-gray-300 rounded" 
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="number" className="mb-1 text-gray-700">Number: </label>
            <input 
              type="phone" 
              name="number" 
              className="p-2 border border-gray-300 rounded" 
            />
          </div>

          {/* Dropdown for selecting donation type */}
          <div className="flex flex-col">
            <label htmlFor="donationType" className="mb-1 text-gray-700">Donation Type: </label>
            <select 
              name="donationType" 
              id="donationType" 
              className="p-2 border border-gray-300 rounded"
              value={donationType}
              onChange={handleDonationTypeChange}
            >
              <option value="">-- Select Donation Type --</option>
              <option  value="tree">Tree</option>
              <option  value="money">Money</option>
              <option  value="land">Land</option>
            </select>
          </div>

          {/* Conditionally render based on donation type */}
          {donationType === 'tree' && (
            <div className="flex flex-col">
              <label htmlFor="numberOfTrees" className="mb-1 text-gray-700">Number of Trees: </label>
              <input 
                type="number" 
                name="numberOfTrees" 
                className="p-2 border border-gray-300 rounded" 
              />
            </div>
          )}

          {donationType === 'money' && (
            <div className="flex flex-col">
              <label htmlFor="utrNumber" className="mb-1 text-gray-700">UTR Number: </label>
              <input 
                type="text" 
                name="utrNumber" 
                className="p-2 border border-gray-300 rounded" 
              />
            </div>
          )}

          {donationType === 'land' && (
            <>
              <div className="flex flex-col">
                <label htmlFor="landArea" className="mb-1 text-gray-700">Land Area (in sq. ft): </label>
                <input 
                  type="number" 
                  name="landArea" 
                  className="p-2 border border-gray-300 rounded" 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="landAddress" className="mb-1 text-gray-700">Land's Full Address: </label>
                <textarea 
                  name="landAddress" 
                  className="p-2 border border-gray-300 rounded" 
                  rows="3"
                ></textarea>
              </div>
            </>
          )}

          {/* Submit button */}
          <button 
            type="submit" 
            className="w-full p-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserRecordForm;

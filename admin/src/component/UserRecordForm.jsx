import React, { useState } from 'react';
import SummaryApi from '../common/SummaryApi';



const UserRecordForm = () => {

    const [formData , setFormData] = useState({
        name:'',
        number:'',
        numberOfTrees:'',
        utrNumber:'',
        landArea:'',
        landAddress:'',

    })

      // Handler for input change
  const handleinputs = (e) => {
    const { name, value } = e.target;
    
  setFormData((prev)=>({
    ...prev,
    [name]:value,
  }))
  };


  const [donationType, setDonationType] = useState('');
  
  // Handler for dropdown change
  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value);
    
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(formData)


    try {
      const postData = await fetch(SummaryApi.postUserRecordDetails.url, {
        method: SummaryApi.postUserRecordDetails.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(postData);
      if (postData.ok) {
        const result = await postData.json();
        console.log('response', result);
        alert('Submited succesfully');
        // Reset the form data after successful submission
        setFormData({
          name:'',
          number:'',
          numberOfTrees:'',
          utrNumber:'',
          landArea:'',
          landAddress:'',
        });
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }


  }

  

  return (
    <>
      <div className="p-6 w-full mx-auto shadow-lg rounded-lg">
        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-700">Name: </label>
            <input 
              type="text" 
              name="name" 
              className="p-2 border border-gray-300 rounded" 
              onChange={handleinputs}
              value={formData.name}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="number" className="mb-1 text-gray-700">Number: </label>
            <input 
              type="phone" 
              name="number" 
              className="p-2 border border-gray-300 rounded" 
              onChange={handleinputs}
              value={formData.number}
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
                onChange={handleinputs}
                value={formData.numberOfTrees}
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
                onChange={handleinputs}
                value={formData.utrNumber}
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
                  onChange={handleinputs}
                  value={formData.landArea}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="landAddress" className="mb-1 text-gray-700">Land's Full Address: </label>
                <textarea 
                  name="landAddress" 
                  className="p-2 border border-gray-300 rounded" 
                  rows="3"
                  onChange={handleinputs}
                  value={formData.landAddress}
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

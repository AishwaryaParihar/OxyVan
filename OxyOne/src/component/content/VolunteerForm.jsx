import React, { useEffect, useState } from 'react';

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    age: '',
    occupation: '',
    priorExperience: '',
    priorExperienceDetails: '',
    trainingSession: '',
    adharCardImage: null,
    panCardImage: null,
    passbookImage: null,
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter((v) => v !== value),
      }));
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };


  useEffect(() => {
    if (submitted) {
      const submitData = async () => {
        const data = new FormData();


        Object.keys(formData).forEach((key) => {
          if (key === 'availability') {
            formData[key].forEach((item) => data.append(key, item));
          } else {
            data.append(key, formData[key]);
          }
        });

    
        const response = await fetch('http://localhost:8080/api/volunteers', {
          method: 'POST',
          body: data,
        });

        const result = await response.json();
        console.log(result);
      };

      submitData();
    }
  }, [submitted]);
  return (
  
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <h2 className="text-xl font-semibold text-green-600 mb-4">Personal Information</h2>

        <div className="mb-4">
          <label className="block text-green-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">Whatsapp Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">Occupation/Student</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        {/* Document Uploads */}
        <h2 className="text-xl font-semibold text-green-600 mb-4">Document Uploads</h2>

        <div className="mb-4">
          <label className="block text-green-700">Aadhar Card Image</label>
          <input
            type="file"
            name="aadharImage"
            // accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">PAN Card Image</label>
          <input
            type="file"
            name="panCardImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Passbook Image</label>
          <input
            type="file"
            name="passbookImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>


       

        {/* Additional Information */}
        <h2 className="text-xl font-semibold text-green-600 mb-4">Additional Information</h2>

        <div className="mb-4">
          <label className="block text-green-700">Why do you want to volunteer with us?</label>
          <textarea
            name="reasonForVolunteering"
            value={formData.reasonForVolunteering}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700">Do you have any prior volunteering experience?</label>
          <div className="flex items-center">
            <label className="mr-4 text-green-600">
              <input
                type="radio"
                name="priorExperience"
                value="Yes"
                onChange={handleChange}
              />  {" "} Yes
            </label>
            <label className="text-green-600">
              <input
                type="radio"
                name="priorExperience"
                value="No"
                onChange={handleChange}
              />  {" "} No
            </label>
          </div>
        </div>

        {formData.priorExperience === 'Yes' && (
          <div className="mb-4">
            <label className="block text-green-700">If yes, please describe:</label>
            <textarea
              name="priorExperienceDetails"
              value={formData.priorExperienceDetails}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-green-700">Are you available to attend training sessions?</label>
          <div className="flex items-center">
            <label className="mr-4 text-green-600">
              <input
                type="radio"
                name="trainingSession"
                value="Yes"
                onChange={handleChange}
              /> {" "}  Yes
            </label>
            <label className="text-green-600">
              <input
                type="radio"
                name="trainingSession"
                value="No"
                onChange={handleChange}
              /> {" "}  No
            </label>
          </div>
        </div>

        {/* Declaration */}
        <h2 className="text-xl font-semibold text-green-600 mb-4">Declaration</h2>

       <div className="mb-4">
        <input type="checkbox" name="note"
                value="note"
                onChange={handleChange} />
       <label className="text-green-700 mb-4 ps-2">
          I confirm that I am volunteering my time and services without expectation of payment or compensation. I understand that I will be required to abide by the organization's policies and procedures.
        </label>
       </div>
        <div className="text-center">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
   
  );
};

export default VolunteerRegistrationForm;

import React, { useState } from 'react';

const VolunteerForm = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    adhar: "",
    pan: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Volunteer Form submitted:', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-green-700">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Contact Number</label>
          <input
            type="tel"
            name="number"
            value={data.number}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Adhar</label>
          <input
            type="file"
            name="adhar"
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">PAN</label>
          <input
            type="file"
            name="pan"
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-green-800">A/C Details</h3>
        <div className="mb-4">
          <label className="block text-green-700">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={data.bankName}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder='Ex: SBI/PNB'
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Account holder name</label>
          <input
            type="text"
            name="accountHolderName"
            value={data.accountHolderName}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={data.accountNumber}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">IFSC code</label>
          <input
            type="text"
            name="ifscCode"
            value={data.ifscCode}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700">Branch name</label>
          <input
            type="text"
            name="branchName"
            value={data.branchName}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <button
          type="submit"
          className="bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;

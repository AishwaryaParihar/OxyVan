import React, { useState } from 'react';

const DonerForm = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    pan: "",
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
    console.log('Doner Form submitted:', data);
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
          <label className="block text-green-700">PAN</label>
          <input
            type="file"
            name="pan"
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <button
          type="submit"
          className="bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonerForm;

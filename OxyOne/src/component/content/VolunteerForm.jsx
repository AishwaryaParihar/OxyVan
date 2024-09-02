import React from 'react'

const VolunteerForm = () => {
  return (
    <div> <form>
    <div className="mb-4">
      <label className="block text-green-700">Name</label>
      <input type="text" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">Contact Number</label>
      <input type="tel" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">Email</label>
      <input type="email" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">Adhar</label>
      <input type="file" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">PAN</label>
      <input type="file" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <h3 className="text-xl font-semibold mb-4 text-green-800">Volunteer Registration Form</h3>
    <div className="mb-4">
      <label className="block text-green-700">PAN</label>
      <input type="file" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">PAN</label>
      <input type="file" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">PAN</label>
      <input type="file" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
   <div className="text-center">
   <button type="submit" className="bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-800">
      Submit
    </button>
   </div>
  </form></div>
  )
}

export default VolunteerForm
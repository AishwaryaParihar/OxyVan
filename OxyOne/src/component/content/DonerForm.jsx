import React from 'react'

const DonerForm = () => {
  return (
    <div><form>
    <div className="mb-4">
      <label className="block text-green-700">Name</label>
      <input type="text" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">Email</label>
      <input type="email" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <div className="mb-4">
      <label className="block text-green-700">Donation Amount</label>
      <input type="number" className="w-full p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
    </div>
    <button type="submit" className="bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-800">
      Submit
    </button>
  </form></div>
  )
}

export default DonerForm
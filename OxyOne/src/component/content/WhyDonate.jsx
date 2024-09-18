import React from 'react';
import ListImage from '../../assets/benifit.png';
import headlogo1 from "../../assets/flower-pot.png";

const TreePlantingInfo = () => {
  return (
    <div className="px-6 pt-20 lg:px-16">
      <div className="flex justify-center ">
        <div className="heading01"> Why Tree Planting Matters</div>
        <img src={headlogo1} className="h-14 inline" alt="Leader Board Logo" />
      </div>
      
      <p className="text-lg mb-6">
        This is a matter of interest to everyone, including industries, business organizations, government and private sectors, national and state road projects, the forest department, tourism, and even owners of barren and rocky land, who will likely show interest.
      </p>
      
      <h3 className="text-2xl font-semibold text-green-700 mb-4">Reasons for Interest:</h3>
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-10">
        {/* Text Section */}
        <ul className="list-disc list-inside text-lg mb-6 space-y-2 lg:w-1/2">
          <li>Trees increase oxygen levels in the atmosphere.</li>
          <li>Trees help reduce pollution.</li>
          <li>Trees encourage rainfall.</li>
          <li>Trees prevent soil erosion.</li>
          <li>Trees provide habitats for wildlife.</li>
          <li>Trees offer shade for people.</li>
          <li>Trees produce fruits, flowers, and medicinal plants.</li>
          <li>Trees improve mental well-being.</li>
        </ul>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={ListImage}
            alt="Tree Planting Benefits"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
      <p className="text-lg mb-6">
        People want their surroundings to be green, filled with trees and plants, and to have a clean environment. The government also wants more trees and spends millions of rupees to protect the environment from pollution. Every year, organizations issue tenders worth millions for tree plantation. However, while trees are planted, they often don't survive due to a lack of care, leading to significant financial loss.
      </p>
    </div>
  );
}

export default TreePlantingInfo;

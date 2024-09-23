import React from 'react'
import { Link } from 'react-router-dom';
import StatsCard from './StatsCard';
import { FaTree, FaLandmark, FaDonate, FaHandHoldingHeart } from 'react-icons/fa'; // Icons


const TotalTrees = () => {
    return (
        <>  
        <div className="">

        <div className="container mx-auto mt-10">
            <div className="flex justify-between space-x-4">
              {/* First Row */}
              <StatsCard
                icon={FaTree}
                title="Trees in Inventory"
                number="1,234"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
              <StatsCard
                icon={FaLandmark}
                title="Lands Donated"
                number="567"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
              <StatsCard
                icon={FaDonate}
                title="Money Donated"
                number="$10,000"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
              <StatsCard
                icon={FaHandHoldingHeart}
                title="Volunteer Hours"
                number="890"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
            </div>
          </div>
    
          <div className="container mx-auto mt-10">
            <div className="flex justify-between space-x-4">
              {/* Second Row */}
              <StatsCard
                icon={FaTree}
                title="Trees Donated"
                number="1,234"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
              <StatsCard
                icon={FaHandHoldingHeart}
                title="Lands Donated"
                number="567"
                classNameColor="text-white"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
              <StatsCard
                icon={FaHandHoldingHeart}
                title="Money Donated"
                number="$10,000"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
              <StatsCard
                icon={FaHandHoldingHeart}
                title="Volunteer Hours"
                number="890"
                className="bg-gradient-to-r from-green-300 to-blue-400 text-white"
              />
            </div>
          </div>                                                                                                            

        </div>
        </>
      );
  
}

export default TotalTrees
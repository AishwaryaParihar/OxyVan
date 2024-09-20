import React, { useState, useEffect } from 'react';
import SummaryApi from '../common/SummaryApi';
import moment from 'moment';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const VolunteerDetails = () => {
  const [volunteerData, setVolunteerData] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch(SummaryApi.volunteersAll.url, {
        method: SummaryApi.volunteersAll.method,
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setVolunteerData(data.data);
        console.log('Volunteer data:', data.data);
      } else {
        console.error('Failed to fetch volunteer details');
      }
    } catch (error) {
      console.error('Error fetching volunteer data:', error);
      alert('Something went wrong while fetching volunteer details.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white pb-4">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-2 text-left">S.No.</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Contact No</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Occupation</th>
              <th className="p-2 text-left">Reason for Volunteering</th>
              <th className="p-2 text-left">Prior Experience</th>
              <th className="p-2 text-left">Training Session</th>
              <th className="p-2 text-left">Note</th>
              <th className="p-2 text-left">Pan Card</th>
              <th className="p-2 text-left">Aadhar Card</th>
              <th className="p-2 text-left">Passbook</th>
              <th className="p-2 text-left">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {volunteerData.length === 0 ? (
              <tr>
                <td colSpan="15" className="text-center p-4">No Volunteer Data Available</td>
              </tr>
            ) : (
              volunteerData.map((detail, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{detail.name}</td>
                  <td className="p-2">{detail.email}</td>
                  <td className="p-2">{detail.phoneNumber}</td>
                  <td className="p-2">{detail.address}</td>
                  <td className="p-2">{detail.age}</td>
                  <td className="p-2">{detail.occupation}</td>
                  <td className="p-2">{detail.reasonForVolunteering}</td>
                  <td className="p-2">{detail.priorExperience}</td>
                  <td className="p-2">{detail.trainingSession}</td>
                  <td className="p-2">
                    {detail.note ? 'Accepted' : 'Not Accepted'}
                  </td>
                  <td className="p-2">
                    <a href={`${apiBaseUrl}/files/${detail.panCardImage}`} target="_blank" download rel="noopener noreferrer">
                      <img
                        src={`${apiBaseUrl}/files/${detail.panCardImage}`}
                        alt="Pan Card"
                        className="w-20 cursor-pointer"
                      />
                    </a>
                  </td>
                  <td className="p-2">
                    <a href={`${apiBaseUrl}/files/${detail.aadharImage}`} target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${apiBaseUrl}/files/${detail.aadharImage}`}
                        alt="Aadhar Card"
                        className="w-20 cursor-pointer"
                      />
                    </a>
                  </td>
                  <td className="p-2">
                    <a href={`${apiBaseUrl}/files/${detail.passbookImage}`} target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${apiBaseUrl}/files/${detail.passbookImage}`}
                        alt="Passbook"
                        className="w-20 cursor-pointer"
                      />
                    </a>
                  </td>
                  <td className="p-2">{moment(detail.createdAt).format('LL')}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerDetails;

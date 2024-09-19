import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import SummaryApi from '../common/SummaryApi';
import { useEffect } from 'react';


const Samples = () => {
  const [donorData, setdonorData] = useState([]);

  const fetchData = async () => {
    try {
      const resposeData = await fetch(SummaryApi.donorAll.url, {
        method: SummaryApi.donorAll.method,
        credentials: 'include',
      });
      const response = await resposeData.json();
      if (response.success) {
        setdonorData(response.data);
        console.log('dataaaaaaaa', response.data);
      }
    } catch (err) {
      console.log('error', err);
      alert('something went wrong');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2 text-left">S.No.</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Contact No</th>
            <th className="p-2 text-left">Pan Card</th>
            <th className="p-2 text-left">Created Date</th>
          </tr>
        </thead>
        <tbody>
          {donorData.map((detail, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{detail.name}</td>
              <td className="p-2">{detail.email}</td>
              <td className="p-2">{detail.phone}</td>
              <td className="p-2">
                <img
                  src={`http://localhost:8080/files/${detail.panCard}`}
                  alt=""
                  className="w-20"
                />
              </td>
              <td className="p-2">{moment(detail?.createdAt).format('LL')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Samples;

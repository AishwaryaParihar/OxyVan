import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import SummaryApi from '../common/SummaryApi';
import { useEffect } from 'react';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

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
      <table className="w-auto">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2 text-left">S.No.</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Address</th>
            <th className="p-2 text-left">Contact No</th>
            <th className="p-2 text-left">Pan Card</th>
            <th className="p-2 text-left">Donation Amount</th>
            <th className="p-2 text-left">Donation Type</th>
            <th className="p-2 text-left">Payment Method</th>
            <th className="p-2 text-left">Card Number</th>
            <th className="p-2 text-left">Card Expiry Date</th>
            <th className="p-2 text-left">Cheque Number</th>
            <th className="p-2 text-left">Bank Details</th>
            <th className="p-2 text-left">Donation Purpose</th>
            <th className="p-2 text-left">Anonymous</th>
            <th className="p-2 text-left">Stay Updated</th>
            <th className="p-2 text-left">Created Date</th>
          </tr>
        </thead>
        <tbody>
          {donorData.map((detail, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{detail.name}</td>
              <td className="p-2">{detail.email}</td>
              <td className="p-2">{detail.address}</td>
              <td className="p-2">{detail.phone}</td>
              
              <td className="p-2">
              <a href={`${apiBaseUrl}/files/${detail.panCard}`} target="_blank" rel="noopener noreferrer">
              <img
                  src={`${apiBaseUrl}/files/${detail.panCard}`}
                  alt=""
                  className="w-20"
                />
                    </a>
              </td>
              <td className="p-2">{detail.donationAmount}</td>
              <td className="p-2">{detail.donationType}</td>
              <td className="p-2">{detail.paymentMethod}</td>
              <td className="p-2">{detail.cardNumber}</td>
              <td className="p-2">{detail.expiryDate}</td>
              <td className="p-2">{detail.chequeNumber}</td>
              <td className="p-2">{detail.bankDetails}</td>
              <td className="p-2">{detail.donationPurpose}</td>
              <td className="p-2">{detail.anonymous}</td>
              <td className="p-2">{detail.updates}</td>
              <td className="p-2">{moment(detail?.createdAt).format('LL')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Samples;

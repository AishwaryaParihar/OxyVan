import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/SummaryApi';
import moment from 'moment'
const ContactForm = () => {
  const [datas, setData] = useState([]);

  const fetchData = async () => {
    try {
      const fetchContactData = await fetch(SummaryApi.contactAll.url, {
        method: SummaryApi.contactAll.method,
        credentials: 'include'
      });
      const responseData = await fetchContactData.json();
      if (responseData.success) {
        setData(responseData.data);
      }
    } catch (err) {
      console.log("Something went wrong",err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-white pb-4'>
      <table className="w-full">
        <thead>
          <tr className="bg-primary text-white">
            <th className='p-2 text-left'>S.No.</th>
            <th className='p-2 text-left'>Name</th>
            <th className='p-2 text-left'>Email</th>
            <th className='p-2 text-left'>Contact No</th>
            <th className='p-2 text-left'>Message</th>
            <th className='p-2 text-left'>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((details, index) => (
              <tr key={index} className='border-b'>
                <td className='p-2'>{index + 1}</td>
                <td className='p-2'>{details.name}</td>
                <td className='p-2'>{details.email}</td>
                <td className='p-2'>{details.contact}</td>
                <td className='p-2'>{details.msg}</td>
                <td className='p-2'>{moment(details?.createdAt).format('LL')}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ContactForm;

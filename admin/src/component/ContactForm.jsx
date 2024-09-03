import React, { useState } from 'react'

const ContactForm = () => {
  const[data,setData]=useState([]);

   const fetchData=async ()=>{
    try{
      const fetchContactData=await fetch(SummaryApi.contactAll.url,{
        method:SummaryApi.contactAll.method,
        credentials:'include'
      })
      const responseData=await fetchContactData.json()
   if(responseData.success){
    setData(responseData.data)
   }


    }catch(err){
      console.log("Something went wrong")
    }
   }
   
  return (
    <div className='bg-white pb-4 '>
      <table className="w-full ">
        <thead>
          <tr className="bg-primary text-white">
            <th className='p-2 text-left'>S.No.</th>
            <th className='p-2 text-left'>Name</th>
            <th className='p-2 text-left'>Email</th>
            <th className='p-2 text-left'>Contact No </th>
            <th className='p-2 text-left'>Massage</th>
            <th className='p-2 text-left'>Created Date</th>
          </tr>
        </thead>
        <tbody>
         {
          data.map((details,index)=>{
            <tr key={index}>
              <td>{index+1}</td>
              <td>{details.name}</td>
              <td>{details.contact}</td>
              <td>{details.email}</td>
              <td>{details.msg}</td>
            </tr>
          })
         }
        </tbody>
      </table>
    </div>
  )
}

export default ContactForm


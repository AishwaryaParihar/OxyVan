import React, { useEffect, useState } from 'react';
import SummaryApi from '../common/SummaryApi';
import moment from 'moment';

const UserRecord = () => {
  const [datas, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null);

  const fetchData = async () => {
    try {
      const fetchContactData = await fetch(SummaryApi.getUserRecordDetails.url, {
        method: SummaryApi.getUserRecordDetails.method,
        credentials: 'include'
      });
      const responseData = await fetchContactData.json();
      if (responseData.success) {
        setData(responseData.data);
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  // Update user record data
  const UpdateData = async (id) => {
    try {
      const response = await fetch(
        SummaryApi.putUserRecordDetails.url.replace(':id', id),
        {
          method: SummaryApi.putUserRecordDetails.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editData[id]), // Send updated data
        }
      );

      const result = await response.json();
      if (result.success) {
        setEditData({});
        setEditMode(null);
        fetchData();
      } else {
        console.error('Failed to update data:', result.message);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Toggle edit mode
  const toggleEditMode = (id) => {
    setEditMode(id);
    if (!editData[id]) {
      // Pre-fill editData with the current record's data
      setEditData({ [id]: datas.find((data) => data._id === id) });
    }
  };

    // Delete volunteer data
    const deleteData = async (id) => {
      if (!window.confirm('Are you sure you want to delete this volunteer?')) {
        return;
      }
      try {
        const response = await fetch(
          SummaryApi.deleteUserRecordDetails.url.replace(':id', id),
          {
            method: SummaryApi.deleteUserRecordDetails.method,
          }
        );
        const result = await response.json();
        if (result.success) {
          fetchData(); // Refresh the data after deletion
        } else {
          console.error('Failed to delete volunteer:', result.message);
        }
      } catch (error) {
        console.error('Error deleting volunteer:', error);
      }
    };
  




  // Handle input change
  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: {
        ...editData[id],
        [e.target.name]: e.target.value,
      },
    });
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
            <th className='p-2 text-left'>Number of Trees</th>
            <th className='p-2 text-left'>Contact No</th>
            <th className='p-2 text-left'>UTR Number</th>
            <th className='p-2 text-left'>Land Area</th>
            <th className='p-2 text-left'>Land Address</th>
            <th className='p-2 text-left'>Created Date</th>
            <th className='p-2 text-left'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {datas.map((details, index) => (
            <tr key={index} className='border-b'>
              <td className='p-2'>{index + 1}</td>
              <td className="p-2">
                {editMode === details._id ? (
                  <input
                    type="text"
                    name="name"
                    value={editData[details._id]?.name || ''}
                    onChange={(e) => handleChange(e, details._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  details.name
                )}
              </td>
              <td className='p-2'>
                {editMode === details._id ? (
                  <input
                    type="number"
                    name="numberOfTrees"
                    value={editData[details._id]?.numberOfTrees || ''}
                    onChange={(e) => handleChange(e, details._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  details.numberOfTrees
                )}
              </td>
              <td className='p-2'>
                {editMode === details._id ? (
                  <input
                    type="text"
                    name="number"
                    value={editData[details._id]?.number || ''}
                    onChange={(e) => handleChange(e, details._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  details.number
                )}
              </td>
              <td className='p-2'>
                {editMode === details._id ? (
                  <input
                    type="text"
                    name="utrNumber"
                    value={editData[details._id]?.utrNumber || ''}
                    onChange={(e) => handleChange(e, details._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  details.utrNumber
                )}
              </td>
              <td className='p-2'>
                {editMode === details._id ? (
                  <input
                    type="text"
                    name="landArea"
                    value={editData[details._id]?.landArea || ''}
                    onChange={(e) => handleChange(e, details._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  details.landArea
                )}
              </td>
              <td className='p-2'>
                {editMode === details._id ? (
                  <input
                    type="text"
                    name="landAddress"
                    value={editData[details._id]?.landAddress || ''}
                    onChange={(e) => handleChange(e, details._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  details.landAddress
                )}
              </td>
              <td className='p-2'>{moment(details?.createdAt).format('LL')}</td>
              <td className='p-2'>
                {editMode === details._id ? (
                  <button
                    onClick={() => UpdateData(details._id)}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                 <div className="">
                   <button
                    onClick={() => toggleEditMode(details._id)}
                    className="bg-blue-500 text-white p-1 rounded"
                  >
                    Update
                  </button>
                        <button
                        onClick={() => deleteData(details._id)}
                        className="bg-red-500 text-white p-1 rounded"
                      >
                        Delete
                      </button>
                 </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRecord;

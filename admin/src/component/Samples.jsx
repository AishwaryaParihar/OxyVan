import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import SummaryApi from '../common/SummaryApi';
import { useEffect } from 'react';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Samples = () => {
  const [donorData, setdonorData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null);

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

  // Update volunteer data
  const UpdateData = async (id) => {
    try {
      const response = await fetch(
        SummaryApi.donorUpdate.url.replace(':id', id),
        {
          method: SummaryApi.donorUpdate.method,
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
        console.error('Failed to update volunteer data:', result.message);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const toggleEditMode = (id) => {
    setEditMode(id);
    // Initialize editData if it doesn't exist
    if (!editData[id]) {
      setEditData({ [id]: donorData.find((data) => data._id === id) });
    }
  };
  // Delete volunteer data
  const deleteData = async (id) => {
    if (!window.confirm('Are you sure you want to delete this volunteer?')) {
      return;
    }
    try {
      const response = await fetch(
        SummaryApi.donorDelete.url.replace(':id', id),
        {
          method: SummaryApi.donorDelete.method,
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
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donorData.map((detail, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="name"
                    value={editData[detail._id]?.name || detail.name} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.name
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="email"
                    name="email"
                    value={editData[detail._id]?.email || detail.email} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.email
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="address"
                    value={editData[detail._id]?.address || detail.address} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.address
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="phone"
                    value={editData[detail._id]?.phone || detail.phone} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.phone
                )}
              </td>
              <td className="p-2">
                <a
                  href={`${apiBaseUrl}/files/${detail.panCard}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${apiBaseUrl}/files/${detail.panCard}`}
                    alt=""
                    className="w-20"
                  />
                </a>
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="number"
                    name="donationAmount"
                    value={editData[detail._id]?.donationAmount || detail.donationAmount} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.donationAmount
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="donationType"
                    value={editData[detail._id]?.donationType || detail.donationType} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.donationType
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="paymentMethod"
                    value={editData[detail._id]?.paymentMethod || detail.paymentMethod} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.paymentMethod
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="cardNumber"
                    value={editData[detail._id]?.cardNumber || detail.cardNumber} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.cardNumber
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="date"
                    name="expiryDate"
                    value={editData[detail._id]?.expiryDate || detail.expiryDate} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.expiryDate
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="number"
                    name="chequeNumber"
                    value={editData[detail._id]?.chequeNumber || detail.chequeNumber} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.chequeNumber
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="bankDetails"
                    value={editData[detail._id]?.bankDetails || detail.bankDetails} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.bankDetails
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="donationPurpose"
                    value={editData[detail._id]?.donationPurpose || detail.donationPurpose} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.donationPurpose
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="anonymous"
                    value={editData[detail._id]?.anonymous || detail.anonymous} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.anonymous
                )}
              </td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <input
                    type="text"
                    name="updates"
                    value={editData[detail._id]?.updates || detail.updates} // Fallback to original value
                    onChange={(e) => handleChange(e, detail._id)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  detail.updates
                )}
              </td>
              <td className="p-2">{moment(detail?.createdAt).format('LL')}</td>
              <td className="p-2">
                {editMode === detail._id ? (
                  <button
                    onClick={() => UpdateData(detail._id)}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <div className="">
                    <button
                      onClick={() => toggleEditMode(detail._id)}
                      className="bg-blue-500 text-white p-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteData(detail._id)}
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

export default Samples;

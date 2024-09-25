import React, { useEffect, useState } from 'react';
import SummaryApi from '../common/SummaryApi';
import moment from 'moment';
import Modal from './Modal'; // Import your new Modal component
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

const UserRecord = () => {
  const [datas, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [activeTab, setActiveTab] = useState('money');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [selectedTreeDetails, setSelectedTreeDetails] = useState([]); // State for tree details

  // Fetch user data from API
  const fetchData = async () => {
    try {
      const fetchContactData = await fetch(
        SummaryApi.getUserRecordDetails.url,
        {
          method: SummaryApi.getUserRecordDetails.method, 
          credentials: 'include',
        }
      );
      const responseData = await fetchContactData.json();
      if (responseData.success) {
        setData(responseData.data);
      }
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  const UpdateData = async (id) => {
    try {
      const response = await fetch(
        SummaryApi.putUserRecordDetails.url.replace(':id', id),
        {
          method: SummaryApi.putUserRecordDetails.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editData[id]),
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

  const toggleEditMode = (id) => {
    setEditMode(id);
    if (!editData[id]) {
      setEditData({ [id]: datas.find((data) => data._id === id) });
    }
  };

  const deleteData = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
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
        fetchData();
      } else {
        console.error('Failed to delete user:', result.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

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
    document.title = 'User Records Management';
    fetchData();
  }, []);

  const renderTableRows = () => {
    return datas.map((details, index) => (
      <tr key={index} className="border-b text-center font-semibold">
        <td className="p-2">{index + 1}</td>
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
        <td className="p-2">
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

        {activeTab === 'money' && (
          <>
            <td className="p-2">
              {editMode === details._id ? (
                <input
                  type="number"
                  name="ammount"
                  value={editData[details._id]?.ammount || ''}
                  onChange={(e) => handleChange(e, details._id)}
                  className="w-full p-2 border rounded"
                />
              ) : (
                details.ammount
              )}
            </td>
            <td className="p-2">
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
          </>
        )}

        {activeTab === 'tree' && (
          <td className="p-2">
            <button
              onClick={() => {
                setSelectedTreeDetails(details.trees || []); // Ensure trees are passed
                setIsModalOpen(true); // Open modal
              }}
              className="bg-green-700 text-white p-1 rounded"
            >
              View Trees
            </button>
          </td>
        )}

        {activeTab === 'land' && (
          <>
            <td className="p-2"> 
              {editMode === details._id ?(
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
            <td className="p-2">
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
          </>
        )}

        <td className="p-2">
          {editMode === details._id ? (
            <button
              onClick={() => UpdateData(details._id)}
              className="bg-green-500 text-white p-1 rounded mx-2"
            >
              Save
            </button>
          ) : (
            <div>
              <button
                onClick={() => toggleEditMode(details._id)}
                className="bg-blue-500 text-white p-1 rounded mx-2"
              >
          <MdOutlineModeEdit />
              </button>
              <button
                onClick={() => deleteData(details._id)}
                className="bg-red-500 text-white p-1 rounded mx-2"
              >
               <RiDeleteBinLine  />
              </button>
            </div>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="bg-white pb-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        User Records Management
      </h1>

      {/* Tab navigation */}
      <div className="flex justify-center mb-4">
        <button
          className={`p-2 mx-2 transition-all duration-300 ease-in-out transform ${
            activeTab === 'money'
              ? 'bg-green-500 text-white scale-105 border border-green-600 rounded-lg shadow-lg'
              : 'bg-gray-200 border border-gray-300 hover:bg-green-200 rounded-lg'
          }`}
          onClick={() => setActiveTab('money')}
        >
          Money
        </button>
        <button
          className={`p-2 mx-2 transition-all duration-300 ease-in-out transform ${
            activeTab === 'tree'
              ? 'bg-green-500 text-white scale-105 border border-green-600 rounded-lg shadow-lg'
              : 'bg-gray-200 border border-gray-300 hover:bg-green-200 rounded-lg'
          }`}
          onClick={() => setActiveTab('tree')}
        >
          Trees
        </button>
        <button
          className={`p-2 mx-2 transition-all duration-300 ease-in-out transform ${
            activeTab === 'land'
              ? 'bg-green-500 text-white scale-105 border border-green-600 rounded-lg shadow-lg'
              : 'bg-gray-200 border border-gray-300 hover:bg-green-200 rounded-lg'
          }`}
          onClick={() => setActiveTab('land')}
        >
          Land
        </button>
      </div>

      <table className="w-full border border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Number</th>
            {activeTab === 'money' && (
              <>
                <th className="p-2 border">ammount</th>
                <th className="p-2 border">UTR Number</th>
              </>
            )}
            {activeTab === 'tree' && (
              <th className="p-2 border">Tree Details</th>
            )}
            {activeTab === 'land' && (
              <>
                <th className="p-2 border">Land Area</th>
                <th className="p-2 border">Land Address</th>
              </>
            )}
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      {/* Modal for tree details */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        treeDetails={selectedTreeDetails}
      />
    </div>
  );
};

export default UserRecord;

const UserRecordModel = require("../models/userRecord")

const getUserRecord= async (req, res)=>{
    try{
        const getDetails=await UserRecordModel.find()

        res.status(200).json({
            message:"contact details get succesfully",
            data:getDetails,
            success:true,
            error:false
        })
        
    }catch(err){
     res.status(500).json({
        message:"can not get the contact details",
        success:false,
        error:true
     })
    }
}


// post request controller 

const postUserRecord=async(req, res)=> {
    const {name, number,  numberOfTrees, utrNumber, landArea, landAddress } = req.body;
    try {
        const addContactDetails = new UserRecordModel({
            name,
            number,
            numberOfTrees,
            utrNumber,
            landArea,
            landAddress,
        });



        await addContactDetails.save();

        res.status(200).json({
            message: "Contact details added successfully",
            data: addContactDetails,
            success: true,
            error: false
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Contact details were not stored",
            success: false,
            error: true,
            details: err.message 
        });
    }
}


// update request controller


const putUserRecord = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      console.log(updatedData);
      const updatedUserRecord = await UserRecordModel.findByIdAndUpdate(
        id,
        updatedData,
        { new: true }
      );
      if (!updatedUserRecord) {
        return res.status(404).json({
          message: 'Volunteer not found',
          success: false,
          error: true,
        });
      }
  
      res.status(200).json({
        data: updatedUserRecord,
        message: 'Volunteer data updated succesfully',
        success: true,
        error: false,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Form data not update' || error,
        error: true,
        success: false,
      });
    }
  };



  // Delete user Record
const deletedUserRecord = async (req, res) => {
  try {
    const formid = req.params.id;
    const deleteData = await UserRecordModel.findByIdAndDelete(formid);

    if (!deleteData) {
      return res.status(404).json({
        message: 'Volunteer not found',
        success: false,
        error: true,
      });
    }

    res.status(200).json({
      message: 'Volunteer deleted successfully',
      data: deleteData,
      success: true,
      error: false,
    });
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({
      message: 'Error deleting volunteer',
      err,
      success: false,
      error: true,
    });
  }
};





module.exports = {postUserRecord,getUserRecord,putUserRecord,deletedUserRecord};
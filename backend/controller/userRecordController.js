const UserRecordModel = require("../models/userRecord")

async function getUserRecord(req, res){
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
module.exports = getUserRecord


// post request controller 

async function postUserRecord(req, res) {
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

module.exports = postUserRecord;
const donorModel = require('../models/donor');

async function getDonnerController(req,res){
 try{
    const donerData= await donorModel.find()
    
    res.status(200).json({
        data:donerData,
        message:"Got the donor data",
        success:true,
        error:false
    })
 }catch(err){
    res.status(500).json(
      {
        message:err,
        success:false,
        error:true
      }
    )
 }
}
module.exports=getDonnerController
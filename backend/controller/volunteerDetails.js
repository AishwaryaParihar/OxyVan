async function volunteerDetailsController(req, res){
try{


   res.staus(200).json({
    message:"form submitted succesfullly",
    success:true,
    error:false
   })

}catch(err){
    console.log("error",err)
    res.status(500).json({
        message:"details submitting failed",
        success:false,
        error:true
    })
}
}
module.exports=volunteerDetailsController
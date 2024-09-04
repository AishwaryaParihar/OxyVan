const mongoose=require("mongoose")

const schema = mongoose.Schema

const volunteerSchema= new schema({
    name:String,
    contact:String,
    email:String,
    adhar:String,
    pan:String,
    bankName:String,
    accountHolder:String,
    accountNumber:Number,
    ifsc:String,
    branchName:String

})
const volunteerModel= mongoose.model("volunteerData",volunteerSchema)
module.exports=volunteerModel
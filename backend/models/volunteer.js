const mongoose=require("mongoose")

const schema = mongoose.Schema

const volunteerSchema= new schema({
    name: {
        type: String,
      
      },
      address: {
        type: String,
        
      },
      phoneNumber: {
        type: String,
       
      },
      email: {
        type: String,
       
        match: [/\S+@\S+\.\S+/, 'is invalid'],
      },
      age: {
        type: Number,
        
      },
      occupation: {
        type: String,
       
      },
      
      availability: {
        type: [String],
        default: [],
      },
      timeCommitment: {
        type: String,
      
        enum: ['Less than 5 hours/week', '5-10 hours/week', 'More than 10 hours/week'],
      },
      reasonForVolunteering: {
        type: String,
        
      },
      priorExperience: {
        type: String,
        enum: ['Yes', 'No'],
      },
      priorExperienceDetails: {
        type: String,
        default: '',
      },
      trainingSession: {
        type: String,
        enum: ['Yes', 'No'],
       
      },
      adharCardImage: {
        type: String,
       
      },
      panCardImage: {
        type: String,
       
      },
      
      date: {
        type: Date,
       
      },
    }, { timestamps: true });
const volunteerModel= mongoose.model("volunteerData",volunteerSchema)
module.exports=volunteerModel
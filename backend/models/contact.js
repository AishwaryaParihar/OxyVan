const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name:String,
  contact:Number,
  email: {
    type: String,
    unique: true,
    required: true,
    // lowercase: true, // Optional: Converts email to lowercase
    // trim: true // Optional: Trims whitespace from email
  },
  msg:String
 
}, {
  timestamps: true
});

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;
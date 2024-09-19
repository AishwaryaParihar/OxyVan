const mongoose = require('mongoose');

const schema = mongoose.Schema;

const volunteerSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    aadharImage: {
      type: String, // store as URL or file path
    },
    panCardImage: {
      type: String, // store as URL or file path
    },
    passbookImage: {
      type: String, // store as URL or file path
    },
    reasonForVolunteering: {
      type: String,
    },
    priorExperience: {
      type: String,
      enum: ['Yes', 'No'],
      required: true,
    },
    // priorExperienceDetails: {
    //   type: String,
    //   required: function () {
    //     return this.priorExperience === 'Yes'; // Only required if priorExperience is "Yes"
    //   }
    // },
    trainingSession: {
      type: String,
      enum: ['Yes', 'No'],
      required: true,
    },
    note: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
const volunteerModel = mongoose.model('volunteerData', volunteerSchema);
module.exports = volunteerModel;

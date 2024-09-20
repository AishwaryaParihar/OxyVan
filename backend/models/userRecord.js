  const mongoose = require("mongoose");

  const UserRecordSchema = new mongoose.Schema({
    name: {type:String, require: true},
    number: {type: Number, require:true},
    numberOfTrees: Number,
    utrNumber: String,
    landArea: Number,
    landAddress: String,

  
  }, {
    timestamps: true
  });

  const UserRecordModel = mongoose.model("userRecord", UserRecordSchema);

  module.exports = UserRecordModel;


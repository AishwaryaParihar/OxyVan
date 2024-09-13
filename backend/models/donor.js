const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DonorSchema = new Schema(
  {
    name: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String },
    panCard: { type: String, require: true },
  },
  { timestemp: true }
);

module.exports = mongoose.model('donorModel', DonorSchema);

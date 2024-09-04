const mongoose = require('mongoose')

const schema = mongoose.Schema

const DonorSchema = new Schema ({
    name : {type : String, require : true},
    contactNumber : {type : Number , require : true},
    email : {type : String },
    filePath : {type : String , require : true}
},
{timestemp : true}
);

model.exports = mongoose.model('donorModel', DonorSchema) ;
// models/TreeCategory.js
const mongoose = require('mongoose');

const treeCategorySchema = new mongoose.Schema({
    uniqueId: {
        type: String,  // Custom unique ID
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,   // Number of trees in stock
        required: true
    },
    distributed: {
        type: Number,   // Number of trees distributed
        required: true,
        default: 0
    }
});

const treeSchema = mongoose.model('TreeCategory', treeCategorySchema);
module.exports= treeSchema

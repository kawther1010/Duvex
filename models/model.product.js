const mongoose = require('mongoose');

//not complited yet
var productschema = new mongoose.Schema({
    //need updates
    name: {
        type: String,
        required: true,
        unique: false,
        max: 255,
        min: 3,
    },
    category: {
        type: String,
        required: true,
        unique: false,
        max: 255,
        min: 3,
    },
    availablity: {
        type: Boolean,
        required: true,
        unique: false,
        default: true,
    },
    rating: {
        type: Number,
        required: true,
        unique: true,
        default: 0,
    }
}, {timestamps: true});


module.exports = mongoose.model('Product', productschema);

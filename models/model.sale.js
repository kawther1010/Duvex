const mongoose = require('mongoose');

var saleschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: false,
        max: 255,
        min: 6,
    },
    address: {
        type: String,
        required: true,
        unique: false,
        max: 255,
        min: 64,
    },
    product: {
        type: String,
        required: false,
        unique: false,
        max: 255,
        min: 6,
    },
    quantity: {
        type: Number,
        required: true,
        unique: false,
        default: 1,
    },
    delivered: {
        type: String,
        required: true,
        unique: false,
        default: "Not delivered yet",
    },
}, {timestamps: true});


module.exports = mongoose.model('Sale',saleschema);

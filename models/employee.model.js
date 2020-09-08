const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    productID: {
        type: Number,
        required: 'This field is required.'
    },
    productName: {
        type: String
    },
    categoryID: {
        type: Number
    },
    categoryName: {
        type: String
    }
});


mongoose.model('Employee', employeeSchema);
const moment = require('moment');
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    entry: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
    },
    category: {
        type: String
    },
    subcategory: {
        type: String
    },
    notes: {
        type: String
    }
});

module.exports = mongoose.model(`${moment().year()}`, expenseSchema);
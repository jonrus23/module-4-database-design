const mongoose = require('mongoose');

// Below is the schema that will be followed for new loan entries in MongoDB
// The 'createdDate' attribute creates a new date object with a default of the current date

const loanSchema = new mongoose.Schema({
    customerName: String,
    phonenumber: String,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: {type: Date, default: new Date()},
    insertedDate: Date
});
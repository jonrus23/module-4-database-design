const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        maxlength: [40, 'A customer name must have less or equal than 40 characters'],
        minlength: [1, 'A customer name must have more or equal than 1 character']
     
    },
    phonenumber:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: [true, 'A customer must have an address'],
        unique: true
    },
    loanAmount: {
        type: String,
        required: [true, 'A customer must have a loan amount']
    },
    interest: {
        type: String,
        required: true
    },
    loanTermYears: {
        type: String,
        required: [true, 'A customer must have a number of years for the loan']
    },
    loanType: {
        type: String,
        required: [true, 'A customer must have a loan type'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A customer must have a description of their loan'],
        unique: true,
        trim: true,
        maxlength: [50, 'A description  must have less or equal than 50 characters'],
        minlength: [1, 'A description  must have more or equal then 1 character']
    },
    createdDate: {
        type: Date
    },
    insertedDate: {
        type: Date
    },

});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    CustomerId: {
        type: Number
    },
    PersonFlag: {
        type: Boolean
    },
    CompanyFlag: {
        type: Boolean
    },
    CompamyName: {
        Type: String
    },
    Names: {
        Type: String
    },   
    LastNames: {
        Type: String
    },        
    ContactNumber: [{
            PhoneNumber: {type: Number},
            PhoneType: {type: String}            
    }],
    Email: {
        type: String
    },
    SysCreationDate: {
        Type: Date
    },
    UserId : {
        type: Number
    }

});

module.exports = mongoose.model('Customer', Customer);
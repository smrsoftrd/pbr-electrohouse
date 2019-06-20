const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    UserId: {
        type: Number
    },
    PersonId: {
        type: Number
    },
    UserName: {
        type: String
    },
    Deactivated: {
        type: Boolean
    },
    Password: {
        type: String
    },
    SysCreationDate: {
        type: Date
    },
    LastLoginDate: {
        type: Date
    }

});

module.exports = mongoose.model('User', User);
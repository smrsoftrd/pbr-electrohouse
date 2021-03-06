const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    UserId: {
        type: Number
    },
    PersonId: {
        type: Number
    },
    UserName: {
        type: String,
        unique: true
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

},{collection:'User'});

module.exports = mongoose.model('User', UserSchema);
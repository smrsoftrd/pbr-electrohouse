const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Menu = new Schema({
    MenuId: {
        type: Number
    },
    MenuDesc: {
        Type: String
    },
    Display: {
        Type: Boolean
    },
    SysCreationDate: {
        Type: Date
    }
});

module.exports = mongoose.model('Menu', Menu);
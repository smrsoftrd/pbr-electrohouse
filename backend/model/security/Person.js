const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Person = new Schema({
    PersonId: {
        type: Number
    },
    Name: {
        type: String
    },
    LastName: {
        type: String
    },
    Deactivated: {
        type: Boolean
    },
    SysCreationDate: {
        type: Date
    }, 
    LasModDate: {
        type: Date
    }
});

module.exports = mongoose.model('Person', Person);
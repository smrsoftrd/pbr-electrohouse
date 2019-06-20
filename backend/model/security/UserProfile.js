const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Menu = require('./Menu');

let UserProfile = new Schema({
    UserProfileId: {
        type: Number
    },
    UserProfileDesc:{
        type: String
    },
    /*UserProfileMenu*/
    UserProfileMenu: {
        Menu:[{
             MenuId: {type: Number},
             UserId: {type: Number},
             Display: {type: Boolean},
             SysCreationDate: {type: Date},
             SysUpdateDate: {type: Date}
             }]
    }
});

module.exports = mongoose.model('UserProfile', UserProfile);

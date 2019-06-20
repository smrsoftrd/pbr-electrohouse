const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    ProductId: {
        type: Number
    },
    ProductCatId: {
        type: Number
    },    
    ProductName: {
        Type: String
    },
    ModelNo: {
        type: String
    },
    SerialNo: {
        type: String
    },    
    MadeDate: {
        Type: Date
    },
    ProviderId: {
        type: Number
    },
    Guarantee: {
        type: String
    },
    Enabled: {
        type: Boolean
    },
    PurchaseAmount: {
        type: Number
    },
    SaleAmount: {
        type: Number
    },
    MaxDiscount: {
        type: Number
    },
    SysCreationDate: {
        Type: Date
    },
    SysUpdateDate: {
        Type: Date
    },
    UserId: {
        Type: Number
    }
});

module.exports = mongoose.model('Product', Product);
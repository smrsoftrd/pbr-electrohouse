const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Invoice = new Schema({
    InvoiceId: {
        type: Number
    },
    CustomerId: {
        type: Number
    },
    InvoiceDetail: [
        {
            ProductId:{type: Number},
            Qtty: {type: Number},
            UserSalesId: {type: Number},
            DispatacherPersonId: {type: Number},
            SysCreationDate: {type: Date},
            SysUpdateDate: {type: Date}            
        }
    ]
});

module.exports = mongoose.model('Invoice', Invoice);
const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const customerSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    displayName: { type: String },
},
    {
        timestamps:true,

    })
    ;


const Customers=mongoose.model('Customer',customerSchema);

module.exports=Customers;


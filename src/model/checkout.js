const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const checkoutSchema=new Schema({

        address: { type: String, required: false },
        phone: { type: String, required: false },



    },
    {
        timestamps:true,

    });

const Checkout=mongoose.model('Checkout',checkoutSchema);

module.exports=Checkout;

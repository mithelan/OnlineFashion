const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const contactSchema=new Schema({

        name: { type: String, required: false },
        phone: { type: String, required: false },
        email: { type: String, required: false },
        comments: { type: String, required: false },


    },
    {
        timestamps:true,

    });

const Contact=mongoose.model('Contact',contactSchema);

module.exports=Contact;

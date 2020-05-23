const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    Cart: {
        type: Array,
        default: []
    },

    register_date:{
        type:Date,
        default:Date.now
    },
    WishList : {
        type : Array,
        default: []
    },
});

module.exports = User = mongoose.model('users',UserSchema); 


const mongoose = require("mongoose");
const URI =" mongodb+srv://dbuser:dbuser@cluster0-phmwx.mongodb.net/test?retryWrites=true&w=majority " 


const connectDB = async ()=>{
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected')
}

module.exports = connectDB;
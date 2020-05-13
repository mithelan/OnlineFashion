const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors');
const bodyParser=require('body-parser');





const app=express();
app.use(cors());
app.use(express.json());


//BodyParser Middelware

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0-phmwx.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true},(err)=>{

        if(!err){
            console.log('Mongo Connected dawwsw');
        }else {
            console.log('Not Connected dawq');
        }

    }

);




const contactRouter=require('./routes/contact');

//narthi
const productsRouter = require("../src/server/routes/products");
app.use("/products", productsRouter);

//mithi
app.use('/contactus',contactRouter);

//Anji
const Users = require('./routes/Users')

app.use('/users', Users)



const port =process.env.PORT || 5000;
app.listen(port,()=> console.log('Server started '+port));








const express=require('express');
const mongoose=require('mongoose');

const bodyParser=require('body-parser');


const app=express();


//BodyParser Middelware

app.use(bodyParser.json());




mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0-phmwx.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true},(err)=>{

        if(!err){
            console.log('Mongo Connected');
        }else {
            console.log('Not Connected');
        }

    }

);



const port =process.env.PORT || 5000;
app.listen(port,()=> console.log('Server started '+port));








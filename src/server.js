const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors');
const bodyParser=require('body-parser');

require('dotenv').config({ path: 'src/.env' });



const app=express();
app.use(cors());
app.use(express.json());


//BodyParser Middelware

app.use(bodyParser.json());

/*mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0-phmwx.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true},(err)=>{

        if(!err){
            console.log('Mongo Connected dawwsw');
        }else {
            console.log('Not Connected dawq');
        }

    }

);*/




const contactRouter=require('./routes/contact');

//narthi
const productsRouter = require("../src/server/routes/products");
app.use("/products", productsRouter);

//mithi
app.use('/contactus',contactRouter);

//Anjik
const Users = require('./routes/Users')

app.use('/users', Users)

const CustomerRouter = require("../src/Justu/customer.router");
app.use("/customers", CustomerRouter);





const port =process.env.PORT || 5000;
app.listen(port,()=> console.log('Server started '+port));

mongoose.connect(process.env.MONGO_DB_CONNECTION,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    },(err)=>{
    if(err) throw err;
    console.log("MONGO VAREN DAW")
});








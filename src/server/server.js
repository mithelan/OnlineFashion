const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect('mongodb+srv://dbuser:user@cluster0-4bxjy.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
    })





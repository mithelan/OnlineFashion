const express = require('express');
const path=require('path');
var mongoose=require('mongoose');


const app = express();

mongoose.connect('mongodb://localhost:27071/af', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('Connected to Database')
});

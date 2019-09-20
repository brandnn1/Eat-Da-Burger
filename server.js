var express = require("express");



var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//MIDDLEWARE FUNCTIONS
//Sets up the Express app to handle the data parsing
//Responsible for parsing incoming data in the form of a POST request
//When parsed, the incoming data is fed to the Req.Body object 
//If these are not included, in POST route there will not be a req.body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

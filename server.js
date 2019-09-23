var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

// Parse application body
// Sets up the Express app to handle data parsing
//MIDDLEWARE FUNCTIONS
//Sets up the Express app to handle the data parsing
//Responsible for parsing incoming data in the form of a POST request
//When parsed, the incoming data is fed to the Req.Body object 
//If these are not included, in POST route there will not be a req.body.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

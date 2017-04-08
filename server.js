var express = require("express");
var app     = express();
var morgan = require("morgan");
var path    = require("path");
var bodyparser = require("body-parser")
var expressvalidator = require('express-validator');
var sqlite3 = require('sqlite3').verbose();
var file = "webshopdb.db";
var db = new sqlite3.Database(file);

var port = 8094; // Change to 8094 for actual server

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyparser.urlencoded({ extended: false })
// Validator
app.use(expressvalidator());
// HTML and CSS Files
app.use(express.static("public"));
// Logger
app.use(morgan("dev"));



/////////// BEGIN ROUTES /////////

// First page
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/log_in.html'));
  //__dirname : It will resolve to your project folder.
});


/////// REGISTRATION ///////

// Random integer generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Searches if variable is in array
function inArray(target, array)
{
  for(var i = 0; i < array.length; i++) 
  {
    if(array[i] === target)
    {
      return true;
    }
  }
  return false; 
}
// Puts registration information in database
app.post('/register_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   var user =
	  [getRandomInt(30000, 70000), 
      req.body.first_name,
      req.body.last_name,
	  req.body.street_name,
	  req.body.registration_emailadress,
	  req.body.pass ];
	console.log(user);
	res.end(JSON.stringify(user));
   
   // Validation checks
   req.checkBody("first_name", "A first name is required.").notEmpty();
   req.checkBody("last_name", "A last name is required.").notEmpty();
   req.checkBody("street_name", "A street name is required.").notEmpty();
   req.checkBody("registration_emailadress", "A first name is required.").notEmpty();
   req.checkBody("registration_emailadress", "This is not a valid email-adress.").isEmail();
   req.checkBody("pass", "A password is required.").notEmpty();
   req.checkBody("re_pass", "Confirmation password does not match.").equals(req.body.pass);
   
   var errors = req.validationErrors();
   
   if (errors) {
	   console.log(errors);
   }
   else {
	  console.log("No errors!")
	  	// Everything in table needs to be filled out. Needs unique ID.
		db.run("INSERT INTO Users(user_id, firstname, lastname, adress, mail, password) VALUES (?, ?, ?, ?, ?, ?)", user);
   }
   
   
/*    db.each("SELECT mail FROM Users", function(err, row) {
	   var all_mails = [];
	   all_mails = row;
	   console.log(all_mails);
	   if (inArray(user[5], all_mails) == true) // if true, display "mail already used"
	   {
		   alert("E-mail already used")
	   }		   
	   else
	   {
		   
	   }
   }); */
});



// Also works
/* app.post('/register_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format

	  var user_id = 330;
      var first_name = req.body.first_name;
      var last_name= req.body.last_name;
	  var adress= req.body.street_name;
	  var mail= req.body.registration_emailadress;
	  var pass= req.body.pass;
   console.log(first_name);
   res.end(JSON.stringify(first_name));
   // Everything in table needs to be filled out. Needs unique ID, so change if you want to create another User.
	db.run("INSERT INTO Users(user_id, firstname, lastname, adress, mail, password) VALUES (?, ?, ?, ?, ?, ?)", user_id, first_name, last_name, adress, mail, pass);
}) */





app.listen(port);

console.log("Running at port " + port);
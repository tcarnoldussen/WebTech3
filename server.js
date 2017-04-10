var express = require("express");
var app     = express();
var morgan = require("morgan");
var path    = require("path");
var bodyparser = require("body-parser")
var expressvalidator = require("express-validator");
var sqlite3 = require("sqlite3").verbose();
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
});


/////// REGISTRATION ///////

// Random integer generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
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
   
   // Validation checks
   req.checkBody("first_name", "A first name is required.").notEmpty();
   req.checkBody("last_name", "A last name is required.").notEmpty();
   req.checkBody("street_name", "A street name is required.").notEmpty();
   req.checkBody("registration_emailadress", "A first name is required.").notEmpty();
   req.checkBody("registration_emailadress", "This is not a valid email-adress.").isEmail();
   req.checkBody("pass", "A password is required.").notEmpty();
   req.checkBody("re_pass", "Confirmation password does not match.").equals(req.body.pass);
   
   var errors = req.validationErrors();
   
   // if validation errors, send error page.
   if (errors) {
	   console.log(errors);
	   res.sendFile(path.join(__dirname + "/public/registration_errors.html"));
   }
   else 
   {
		console.log("No body errors!")
		// Checker if email already exists in database and if it doesn't, registrates.
		db.all("SELECT mail FROM Users", function(err, rows) {
			var all_mails = [];
			all_mails = rows;
		
			// Checks if email already exists and breaks if found
			var email_exist = false;
			for(var i = 0; i < all_mails.length; i++) {
				if (all_mails[i].mail == user[4]) {
					email_exist = true;
					break;
				}
			}
			// if email already exist, send error page.
			if (email_exist == true)
			{
				console.log("Email already exists.");
				res.sendFile(path.join(__dirname + "/public/registration_errors.html"));
			}
			else
			{
				// Everything in table needs to be filled out. Needs unique ID.
				db.run("INSERT INTO Users(user_id, firstname, lastname, adress, mail, password) VALUES (?, ?, ?, ?, ?, ?)", user);
				db.run("INSERT INTO BUYERS(user_id) VALUES (?)", user[0])
				console.log("New Registration");
				// Go to Log In Page
				res.sendFile(path.join(__dirname + "/public/log_in.html"));
			}
		});
   }	
});

///////////// LOG IN ///////////

app.post("/log_in.html", function(req, res){

	var mail = req.body.emailadress;
	var pass = req.body.password;

	if (req.body.emailadress && req.body.password)
	{
		db.all("SELECT * FROM Users where (mail IS ?) AND (password IS ?)", mail, pass, function(err, rows)
		{
			if (err)
			{
				console.log("Error: " + err)
			}
			else if (rows = [])
			{	
				console.log("Invalid login")
				res.sendFile(path.join(__dirname + "/public/log_in_errors.html"));
			}
			else if (rows != [])
			{
				rows.forEach(function (row) 
				{
					console.log("Login Succes")
					res.sendFile(path.join(__dirname + "/public/overview_menu.html"));
				});
			}
		});
		
	}
	else 
	{
	console.log("Login fail");
	res.sendFile(path.join(__dirname + "/public/log_in_errors.html"));
	}
});


app.listen(port);

console.log("Running at port " + port);
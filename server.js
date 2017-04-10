var express = require("express");
var app     = express();
var morgan = require("morgan");
var path    = require("path");
var bodyParser = require("body-parser");
var port = 3000;
var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

// HTML and CSS Files
app.use(express.static("public"));
// Logger
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

// First page
app.get("/",function(req, res){
  res.sendFile(path.join(__dirname + "/public/log_in.html"));
  //__dirname : It will resolve to your project folder.
});

app.post("/log_in.html", function(req, res){

	var mail = req.body.emailadress;
	var pass = req.body.password;

	if (req.body.emailadress && req.body.password)
	{
		var db = new sqlite3.Database(__dirname + "/webshopdb2.db");
		db.all("SELECT * FROM Users where (mail IS ?) AND (password IS ?)", mail, pass, function(err, rows)
		{
			db.close();
			if (err)
			{
				console.log("Error: " + err)
			}
			else if (rows = [])
			{	
				console.log("Invalid login")
				res.sendFile(path.join(__dirname + "/public/log_in.html"));
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
	res.sendFile(path.join(__dirname + "/public/log_in.html"));
	}
});

function checkEmail(req, res) {
	if (req.body.emailadress == "hai")
		res.sendFile(path.join(__dirname + "/public/overview_menu.html"));
	else res.sendFile(path.join(__dirname + "/public/log_in.html"));
}


app.listen(port);

console.log("Running at port " + port);
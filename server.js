var express = require("express");
var app     = express();
var morgan = require("morgan");
var path    = require("path");
var bodyParser = require("body-parser")
var port = 3000;
var fs = require("fs");


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
		if (req.body.emailadress == "hai")
		res.sendFile(path.join(__dirname + "/public/overview_menu.html"));
	else res.sendFile(path.join(__dirname + "/public/log_in.html"));
});

function checkEmail(req, res) {
	if (req.body.emailadress == "hai")
		res.sendFile(path.join(__dirname + "/public/overview_menu.html"));
	else res.sendFile(path.join(__dirname + "/public/log_in.html"));
}


app.listen(port);

console.log("Running at port " + port);
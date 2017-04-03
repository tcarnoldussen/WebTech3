var express = require("express");
var app     = express();
var morgan = require("morgan");
var path    = require("path");
var port = 3000;

// HTML and CSS Files
app.use(express.static("public"));
// Logger
app.use(morgan("dev"));


// First page
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/log_in.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(port);

console.log("Running at port " + port);
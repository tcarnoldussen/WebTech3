var express = require("express");
var app     = express();
var morgan = require("morgan");
var path    = require("path");
var bodyparser = require("body-parser")
var expressvalidator = require("express-validator");
var sqlite3 = require("sqlite3").verbose();
var file = "dbnew.db";
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

// SEARCH START
app.get('/search.html', function(req, res){
var searchQuery = req.query.q;
db.all('SELECT * FROM Products WHERE name LIKE ?', '%' + [searchQuery] + '%',
function (err, rows){
    if (err){
        console.err(err);
        res.status(500);
    }else {
        res.json({ "zoekresultaten" : rows});
    }
});
}); 
// SEARCH END

// PRODUCTDETAILS START
app.get('/product.html', function(req, res){
var prodId = req.query.id;
db.all('SELECT * FROM Products WHERE product_id = ?', [prodId],
function (err, row){
    if (err){
        console.err(err);
        res.status(500);
    }else {
        res.json({ "productdetails" : row});
    }
});
}); 
// PRODUCTDETAILS END



app.listen(port);

console.log("Running at port " + port);
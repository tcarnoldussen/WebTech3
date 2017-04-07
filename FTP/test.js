var sqlite3 = require('sqlite3').verbose();
var file = "webshopdb.db";
var db = new sqlite3.Database(file);
db.all("SELECT * FROM Users", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.firstname, row.lastname);
        })
	});	
db.close();

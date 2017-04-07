var sqlite3 = require('sqlite3').verbose();
var file = "webshopdb.db";
var db = new sqlite3.Database(file);

// Everything in table needs to be filled out. Needs unique ID, so change if you want to create another User.
db.run("INSERT INTO Users(user_id, firstname, lastname, adress, mail, password) VALUES (432526, 'firsttest', 'lasttest', 'adresstest', 'mailtest', 'passwordtest')");

// * Selects everything
db.each("SELECT firstname FROM Users", function(err, row) {
	if(err) throw err;
	
	
            console.log(row);
        });
db.close();
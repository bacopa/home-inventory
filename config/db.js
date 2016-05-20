"use strict";

var mysql = require("mysql");

var db = mysql.createConnection({
	host: "db4free.net",
	user: "grue",
	password: "secret",
	database: "aliciadb"
});

db.connect(function (err){
	if(err){
		console.log("Error connecting to DB:", err);
	} else {
		console.log("Connection Successful.");
	}
});
// ?????
//db.end();

module.exports = db;
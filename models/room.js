// 'use strict';

// var db = require('../config/db');


//  db.run('CREATE TABLE IF NOT EXISTS rooms (id text, room TEXT)');



// exports.findAll = function(cb) {
// 	db.all('SELECT * FROM rooms', cb);

// }

// exports.create = function(room, cb) {
// 	db.serialize(function () {
// 		var stmt = db.prepare("INSERT INTO rooms VALUES (?, ?)")
// 		stmt.run( req.body.number, req.body.room );
// 		stmt.finalize(cb); 	
// 	})
// }

// exports.findById = function(id, cb) {
// 	db.each("SELECT * FROM rooms WHERE id = ?", id,
// 		cb)
// }

// exports.delete = function(id, cb) {
// 	db.run("DELETE FROM rooms WHERE id = ?", id, cb)
// }

// exports.update = function(req, cb) {

// 	db.run("UPDATE rooms SET room = ? WHERE id = ?", 

// 		[ req.body.room ], 
// 		cb
// 		)
// }




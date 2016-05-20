"use strict";

var db = require("../config/db");



db.query(`CREATE TABLE IF NOT EXISTS items (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(100),
	category VARCHAR(100),
	room DECIMAL(10,2)
	)`);

db.query(`CREATE TABLE IF NOT EXISTS rooms (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	room VARCHAR(100)
	)`);


exports.findAll = function(cb) {
	db.all(`SELECT * FROM items`, cb);
}

exports.create = function(item, cb) {
	db.serialize(function () {
		var stmt = db.prepare(`INSERT INTO items VALUES (?,?,?,?)`)
		stmt.run( item.description, item.category, item.value, item.room);
		stmt.finalize(cb);
	})
}

exports.findById = function(id, cb) {
	db.each(`SELECT * FROM items WHERE id = ?`, id, cb)
}

exports.delete = function(id, cb) {
	db.run(`DELETE FROM items WHERE id = ?`, id, cb)
}

exports.update = function(req, cb) {
	db.run(`UPDATE items SET description = ?, category = ?, value = ?, room = ? WHERE id = ?`,
		[req.body.description, req.body.category, req.body.value, req.body.room, req.params.id],
		cb
		)
}
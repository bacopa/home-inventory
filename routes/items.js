"use strict";

var express = require("express");
var router = express.Router();


var Item = require("../models/item")


router.get("/", (req, res) => {
	Item.findAll(function (err, items){
		if(err)return res.status(400).send(err);
		res.render('index', { items: items });
	});	
});


router.post("/", (req, res) => {

	Item.create(req.body, err => {
		if(err) return res.status(400).send(err);

		Item.findAll(function (err, items){
			if(err)return res.status(400).send(err);
			res.render('index', { items: items });
		});
		//why can't i save this function to a variable?
		// retrieve();	
	});
});

// does the uri need the :id? --> yes it does!
router.get("/:id", (req, res) => {
	Item.findById(req.params.id, (err, item) => {
		if(err) return res.status(400).send(err);
		res.send(item);
	});
});

router.delete("/:id", (req, res) => {
	Item.delete(req.params.id, err => {
		if(err) return res.status(400).send(err);
		res.send(err);
	})
})

router.put("/:id", (req, res) => {
	Item.update(req, err => {
		if(err){
			return res.status(400).send(err);
		}		
		res.send(err);
	})
})

module.exports = router;
















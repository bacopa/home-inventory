'use strict';


const PORT = process.env.PORT || 3000;


var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var Message = require("./models/item");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.redirect('/api/items');
});



app.use('/api', require('./routes/api'));

app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});

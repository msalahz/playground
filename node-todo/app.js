// import express framework
var express = require('express');
// create an express app
var app = express();
// import mongoose for managing MongoDB
var mongoose = require('mongoose');
// import db config
var config = require('./config');
// import setup controller
var setupController = require('./controllers/setup');
// import setup controller
var todoController = require('./controllers/todo');
// set app listening port
var port = process.env.PORT || 3001;

app.use('/api', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// map all /assets requests to public directory
app.use('/assets', express.static(__dirname + '/public'));

// init mongodb connection
mongoose.connect(config.getDbConnectionString());

// exec setup module to init setup route for seed data generation
setupController(app);
// exec todo module to init todo api routes consuming todos
todoController(app);

app.use('/', function (req, res) {
  res.send('Welcome to Todo App')
});

// set app listener port
app.listen(port);

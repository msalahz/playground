// import express framework
const express = require('express');
// create an express app
const app = express();
// import mongoose for managing MongoDB
const mongoose = require('mongoose');
// import db config
const config = require('./config');
// import setup controller
const setupController = require('./controllers/setup');
// set app listening port
const port = process.env.PORT || 3000;

// map all /assets requests to public directory
app.use('/assets', express.static(`${__dirname}/public`));

// init mongodb connection
mongoose.connect(config.getDbConnectionString());

// exec setup module to init setup route for seed data generation
setupController(app);

// set app listener port
app.listen(port);
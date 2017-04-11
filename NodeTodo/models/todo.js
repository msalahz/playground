// import mongoose npm package
const mongoose = require('mongoose');

// get schema ref
const Schema = mongoose.Schema;

// create todos schema
let todoSchema = new Schema({
    user: String,
    body: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

// create todos model
let todo = mongoose.model('todo',todoSchema);

//export todos model
module.exports = todo;
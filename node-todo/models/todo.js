// import mongoose npm package
var mongoose = require('mongoose');

// get schema ref
var Schema = mongoose.Schema;

// create todos schema
var todoSchema = new Schema({
  user: String,
  body: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

// create todos model
var todo = mongoose.model('todo', todoSchema);

// export todos model
module.exports = todo;

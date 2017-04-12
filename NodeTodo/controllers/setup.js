// import todos model
var Todo = require('../models/todo')

// export setup node module
module.exports = function (app) {
    // generated seed data
  var seed = [
    {
      'hasAttachment': false,
      'isDone': false,
      'body': 'Minim tempor cupidatat duis culpa.',
      'user': 'test'
    },
    {
      'hasAttachment': false,
      'isDone': false,
      'body': 'Duis ipsum eu aute nisi eiusmod nisi.',
      'user': 'test'
    },
    {
      'hasAttachment': false,
      'isDone': true,
      'body': 'Commodo non magna aliquip pariatur in ea culpa magna.',
      'user': 'test'
    },
    {
      'hasAttachment': true,
      'isDone': false,
      'body': 'Commodo dolor enim mollit eiusmod aliquip Lorem amet eiusmod minim eiusmod eu cillum anim incididunt.',
      'user': 'test'
    },
    {
      'hasAttachment': true,
      'isDone': false,
      'body': 'Sit in laborum exercitation sunt irure anim elit nostrud mollit irure tempor eu labore.',
      'user': 'test'
    },
    {
      'hasAttachment': false,
      'isDone': true,
      'body': 'Culpa laboris ex dolor deserunt fugiat ad.',
      'user': 'test'
    },
    {
      'hasAttachment': false,
      'isDone': false,
      'body': 'Culpa et ut nostrud irure consequat laborum deserunt esse fugiat reprehenderit voluptate mollit.',
      'user': 'test'
    }
  ]

    // init api/setup endpoint for generating seed data
  app.get('/api/setup', function (req, res) {
        // add todos seed data to mongodb
    Todo.create(seed, function (err, todos) {
            // error check
      if (err) throw err
            // send created todos in the response
      res.send(todos)
    })
  })
}

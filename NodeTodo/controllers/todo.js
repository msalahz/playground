var Todo = require('../models/todo')
var bodyParser = require('body-parser')

module.exports = function (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.get('/api/todos/', function (req, res) {
    Todo.find({}, function (err, todos) {
      if (err) throw err
      res.send(todos)
    })
  })

  app.get('/api/todos/:id', function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
      if (err) throw err
      res.send(todo)
    })
  })

  app.post('/api/todos/', function (req, res) {
    Todo.create({
      user: 'test',
      body: req.body.body,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment
    }, function (err, todo) {
      if (err) throw err
      res.send(todo)
    })
  })

  app.put('/api/todos/:id', function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {
      body: req.body.body,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment
    }, function (err, todo) {
      if (err) throw err
      res.send(todo)
    })
  })

  app.delete('/api/todos/:id', function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err, todo) {
      if (err) throw err
      res.send(todo || 'Todo doesn\'t exist')
    })
  })

}

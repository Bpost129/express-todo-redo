import { Todo } from "../models/todo.js"

function index(req, res) {
  Todo.find({})
  .then(todos => {
    res.render('todos/index', {
      todos: todos,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newTodo(req, res) {
  res.render('todos/new')
}

function create(req, res) {
  req.body.done = false
  Todo.create(req.body)
  .then(todo => {
    res.redirect('/todos')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/todos')
  })
}

export {
  index,
  newTodo as new,
  create,

}


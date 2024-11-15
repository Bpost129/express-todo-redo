import { Todo } from "../models/todo.js"

function index(req, res) {
  Todo.find({})
  .then(todos => {
    res.render('todos/index', {
      todos: todos,
      time: req.time
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

function show(req, res) {
  Todo.findById(req.params.todoId)
  .then(todo => {
    res.render('todos/show', {
      todo: todo
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/todos')
  })
}

function deleteTodo(req, res) {
  Todo.findByIdAndDelete(req.params.todoId)
  .then(todo => {
    res.redirect('/todos')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/todos')
  })
}

function edit(req, res){
  Todo.findById(req.params.todoId)
  .then(todo => {
    res.render('todos/edit', {
      todo: todo
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/todos')
  })
}

function update(req, res) {
  Todo.findByIdAndUpdate(req.params.todoId, req.body, {new: true})
  .then(todo => {
    res.redirect(`/todos/${todo._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/todos`)
  })
}

export {
  index,
  newTodo as new,
  create,
  show,
  deleteTodo as delete,
  edit,
  update,
}


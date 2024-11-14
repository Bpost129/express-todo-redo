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

export {
  index,

}


import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

// GET localhost:3000/users
router.get('/', todosCtrl.index)

router.get('/new', todosCtrl.new)

router.get('/:todoId', todosCtrl.show)

router.post('/', todosCtrl.create)

router.delete('/:todoId', todosCtrl.delete)

export { router }

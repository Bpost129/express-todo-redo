import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

// GET localhost:3000/users
router.get('/', todosCtrl.index)

router.get('/new', todosCtrl.new)

router.get('/:todoId', todosCtrl.show)

router.get('/:todoId/edit', todosCtrl.edit)

router.post('/', todosCtrl.create)

router.delete('/:todoId', todosCtrl.delete)

router.put('/:todoId', todosCtrl.update)

export { router }

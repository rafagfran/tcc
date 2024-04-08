import express from 'express'
import  taskController  from '../controllers/taskController.js'

const router = express.Router();

router.get('/',taskController.getAllTasks)
router.post('/', taskController.newTask)
router.delete('/:id', taskController.deleteTask)
router.put('/description/:id', taskController.updateTaskDescription)
router.put('/status/:id', taskController.updateTaskStatus)

export default router
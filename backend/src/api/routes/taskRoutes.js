import express from 'express'
import  taskController  from '../controllers/taskController.js'

const router = express.Router();

router.get('/tasks',taskController.getAllTasks)
router.post('/tasks', taskController.newTask)
router.delete('/tasks/:id', taskController.deleteTask)
router.put('/description/:id', taskController.updateTaskDescription)
router.put('/status/:id', taskController.updateTaskStatus)

export default router
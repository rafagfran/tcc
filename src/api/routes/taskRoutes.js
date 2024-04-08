import express from 'express'
import  taskController  from '../controllers/taskController.js'

const router = express.Router();

router.get('/',taskController.getAllTasks)
router.post('/', taskController.newTask)

export default router
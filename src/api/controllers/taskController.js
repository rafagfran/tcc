
import TaskModel from '../models/taskModel.js'

class taskController {
   getAllTasks(req,res) {
        TaskModel.getAllTasks(function(err, tasks){
            if (err) {
                res.status(500).json({ message: err.message})
            }else {
                res.json(tasks);
            }
        })
    }
    
    newTask(req,res){
        const { description, status } = req.body
        TaskModel.newTask(description, status, function(err){
            if (err) {
                res.status(500).json({ message: err.message})
            }else {
                res.json('New task sucessfull registred');
            }
        })
    }
}

export default new taskController()
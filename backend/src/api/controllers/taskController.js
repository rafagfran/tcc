
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

    deleteTask(req,res){
        const id  = req.params.id
        TaskModel.deleteTask(id, function(err){
            if(err){
                res.status(500).json({ message: err.message})
            }else{
                res.json(`Task with ID: ${id} has been removed`)
            }
        })
    }

    updateTaskDescription(req,res){
        const id = req.params.id
        const { description } = req.body
        
        TaskModel.updateTaskDescription(description, id, function(err){
            if(err){
                res.status(500).json({ message: err.message})
            }else{
                res.json(`Description of Task with ID: ${id} has been updated`)
            }
        })
    } 

    updateTaskStatus(req,res){
        const id = req.params.id
        const { status } = req.body
        
        TaskModel.updateTaskStatus(status, id, function(err){
            if(err){
                res.status(500).json({ message: err.message})
            }else{
                res.json(`Status of Task with ID: ${id} has been updated`)
            }
        })
    }   
}

export default new taskController()
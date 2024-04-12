
import db from '../config/database.js'

const task = {
    getAllTasks: function(callback) {
        return db.query('SELECT id,description,status FROM tasks', callback)
    },
    newTask: function(description, status, callback) {
        return db.query('INSERT INTO tasks(description, status) VALUES (? ,?)',[description, status], callback)
    },
    deleteTask: function(id, callback){
        return db.query('DELETE FROM tasks WHERE id=?', [id], callback )
    },
    updateTaskDescription: function(newDescription, id, callback){
        return db.query('UPDATE tasks SET description = ? where id=?', [newDescription, id], callback)
    },
    updateTaskStatus: function(newStatus, id, callback){
        return db.query('UPDATE tasks SET status = ? where id=?', [newStatus, id], callback)
    }
}

export default task

import db from '../config/database.js'

const task = {
    getAllTasks: function(callback) {
        return db.query('SELECT * FROM tasks', callback)
    },
    newTask: function(description, status, callback) {
        return db.query('INSERT INTO tasks(description, status) VALUES (? ,?)',[description, status], callback)
    }

}

export default task
import React from 'react'
import './styles/Task.css'
import AddNewTask from '../components/taskComponents/addNewTask.jsx'
import TableTasks from '../components/taskComponents/tableTasks.jsx'

const Task = () => {
  return (
    <div className='task'>
        <AddNewTask/>
        <TableTasks/>
    </div>
  )
}

export default Task
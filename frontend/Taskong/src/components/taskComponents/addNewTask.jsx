import React from 'react'
import './styles/addNewTask.css'
import newTaskIcon from '../../assets/new-task-icon.png'

const addNewTask = () => {
  return (
    <div className="new-task">
        <button className="newTask-btn"><img src={newTaskIcon} alt="" />To add</button>
        <input id="description-newTask" type="text" placeholder='Description'/>
    </div> 
  )
}
export default addNewTask
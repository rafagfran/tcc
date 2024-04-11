import React from 'react'
import './Task.css'
import newTaskIcon from '../../../assets/new-task-icon.png'

const Task = () => {
  return (
    <div className='task'>
      <div className="task-container">
        <div className="new-task">
          <button className="newTask-btn"><img src={newTaskIcon} alt="" />To add</button>
          <input id="description-newTask" type="text" placeholder='Description'/>
        </div> 
        <div className="table">
          <h3 id='description-header'>DESCRIPTION</h3>
          <h3 id='status-header'>STATUS</h3>

          {/* ---------COMPONENT PROPS FAZER-------- */}
          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>

          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>

          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>

          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>
        </div>
      </div>  
    </div>
  )
}

export default Task
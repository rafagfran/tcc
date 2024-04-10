import React from 'react'
import './Task.css'

const Task = () => {
  return (
    <div className='task'>
      <div className="days">
        <ul>
          <li><button><h4>Domingo</h4></button></li>
          <li><button><h4>Segunda<hr/>Feira</h4></button></li>
          <li><button><h4>Terça<hr/>Feira</h4></button></li>
          <li><button><h4>Quarta<hr/>Feira</h4></button></li>
          <li><button><h4>Quinta<hr/>Feira</h4></button></li>
          <li><button><h4>Sexta<hr/>Feira</h4></button></li>
          <li><button><h4>Sábado</h4></button></li>
        </ul>
      </div>
      <div className="task-container">
        <div className="new-task">
          <button className="newTask-btn">ADD New task</button>
          <input id="description-newTask" type="text" placeholder='Description'/>
          <input id="status-newTask" type="text" placeholder='Status'/>
        </div> 
        <hr/>
        <div className="table">
          <h3 id='description-header'>DESCRIPTION</h3>
          <h3 id='status-header'>STATUS</h3>

          {/* ---------COMPONENT PROPS FAZER-------- */}
          <input id='task-check'type="checkbox" />
          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>

          <input id='task-check'type="checkbox" />
          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>

          <input id='task-check'type="checkbox" />
          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>

          <input id='task-check'type="checkbox" />
          <input id='task-id' type="number" placeholder='id' disabled='true'/>
          <input id='task-description' type="text" placeholder='description'/>
          <input id='task-status' type="text" placeholder='status'/>
        </div>
      </div>  
    </div>
  )
}

export default Task
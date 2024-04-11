import React from 'react'
import './styles/tableTasks.css'

const tableTasks = () => {
  return (
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
  )
}

export default tableTasks
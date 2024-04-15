import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableData from './TableData.jsx';
import newTaskIcon from '../../assets/new-task-icon.png';
import './styles/TableTasks.css';

const TableTasks = () => {
  
  const [task, setTask] = useState([])
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("Pendente")
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faz uma solicitação HTTP GET para o servidor Node.js
        const response = await axios.get('http://localhost:3000/tasks');
        // Atualiza o estado do componente com os dados recebidos
        setTask(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }
    fetchData()
  }, [])

  const handleNewTask = async () => {
    try{
      await axios.post('http://localhost:3000/tasks', {description, status})
      setDescription([])
      const response = await axios.get('http://localhost:3000/tasks')
      setTask(response.data)
    }catch(error){
      console.error('Erro ao inserir ou buscar os dados:', error);
    }
  }

// ------------------------------------------------------------------------------
  return (
    <section className="table-tasks">
      <div className="new-task">
        <button className="newTask-btn" onClick={() => {handleNewTask()}}><img src={newTaskIcon} alt=""/>To add</button>
        <input id="description-newTask" type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <div className="table">
        <div className="table-header">
          <table>
            <thead>
              <tr id='header'>
                <th scope='col' id='id' >id</th>
                <th scope='col' id='description'>description</th>
                <th scope='col' id='status'>status</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-data">
          <table>
            <tbody>
              {/* DATA */}
              {task.map((task) => (
                <TableData key={task.id} id={task.id} description={task.description} status={task.status}/>
              ))}
            </tbody> 
          </table>
        </div>

      </div>
    </section>
    
  )
}

export default TableTasks
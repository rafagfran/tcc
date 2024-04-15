import React from 'react'
import './styles/TableData.css'
import TrashIcon from '../../assets/trash-icon.png'
import axios from 'axios'

const TableData = (props) => {

  const {id, description, status ,setTask} = props

  const handleRemoveTask = async () => {
    try{
      await axios.delete(`http://localhost:3000/tasks/${id}`)
      // ENTENDER MELHOR
      setTask(prevTask => prevTask.filter(task => task.id !== id));
    }catch(error){
      console.error('Erro ao deletar dados:', error);
    } 
  }

  return (
      <tr className='data'>
          <td id='trash'><img onClick={handleRemoveTask}src={TrashIcon} alt="" /></td>
          <td id='id' ><span>{id}</span></td>
          <td id='description'><span>{description}</span></td>
          <td id='status'><span>{status}</span></td>
          <td id='concluded'><span>Conclude task</span></td>
      </tr>

  )
}

export default TableData

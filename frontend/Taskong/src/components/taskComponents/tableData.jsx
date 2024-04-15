import React from 'react'
import './styles/TableData.css'

const TableData = (props) => {
  return (
    <>
      <tr className='data'>
          <td id='id' >{props.id}</td>
          <td id='description'>{props.description}</td>
          <td id='status'>{props.status}</td>
      </tr>
    </>
    
    

  )
}

export default TableData
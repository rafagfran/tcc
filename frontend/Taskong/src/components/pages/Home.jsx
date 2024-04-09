import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
        <div className='days'>
            <ul>
              <li><a href="/segunda">Segunda<hr/>feira</a></li>
              <li><a href="/terça">Terça<hr/>feira</a></li>
              <li><a href="/quarta">Quarta<hr/>feira</a></li>
              <li><a href="/quinta">Quinta<hr/>feira</a></li>
              <li><a href="/sexta">Sexta<hr/>feira</a></li>
              <li><a href="/sexta">Sabado</a></li>
              <li><a href="/sexta">Domingo</a></li>
            </ul>
        </div>  
        {/* <hr className='divisor'/> */}
    </div>
    
  )
}

export default Home
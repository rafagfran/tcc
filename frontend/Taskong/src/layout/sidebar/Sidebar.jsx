import React from 'react'
import './Sidebar.css'
import homeIcon from '../../assets/home-icon.png'
import tasksIcon from '../../assets/tasks-icon.png'
import financeIcon from '../../assets/finance-pig-icon.png'
import pomodoroIcon from '../../assets/pomodoro-icon.png'
import dropdownIcon from '../../assets/dropdown-icon.png'
import menuIcon from '../../assets/menu-icon.png'

import homeIconDark from '../../assets/dark-theme/home-dark-icon.png'
import tasksIconDark from '../../assets/dark-theme/tasks-dark-icon.png'
import financeIconDark from '../../assets/dark-theme/finance-pig-dark-icon.png'
import pomodoroIconDark from '../../assets/dark-theme/pomodoro-dark-icon.png'
import dropdownIconDark from '../../assets/dark-theme/dropdown-dark-icon.png'
import menuIconDark from '../../assets/dark-theme//menu-dark-icon.png'

const Sidebar = () => {

  const defaultTheme = 'dark'

  function showSideBar(){
    var sidebar = document.querySelector('.sidebar')

    sidebar.classList.toggle('open')
    sidebar.classList.toggle('closed')
  }

  function themeSelector() {
    var divTheme = document.querySelector('.theme-selector')
    var home = document.getElementById('home-icon')
    var tasks = document.getElementById('tasks-icon')
    var finance = document.getElementById('finance-icon')
    var pomodoro = document.getElementById('pomodoro-icon')
    var dropdown = document.getElementById('dropdown-icon')
    var menu = document.getElementById('menu-icon')
    var body = document.body

    divTheme.classList.toggle('dark')
    divTheme.classList.toggle('light')

    body.classList.toggle('theme-dark')
    body.classList.toggle('theme-light')

    if(divTheme.classList.contains('light')){
        home.src = homeIconDark;
        tasks.src = tasksIconDark;
        finance.src = financeIconDark;
        pomodoro.src = pomodoroIconDark;
        dropdown.src = dropdownIconDark
        menu.src = menuIconDark
    }else{
        home.src = homeIcon;
        tasks.src = tasksIcon;
        finance.src = financeIcon;
        pomodoro.src = pomodoroIcon;
        dropdown.src = dropdownIcon;
        menu.src = menuIcon
    }
      
  }

  return (
    <div className= {`sidebar theme-${defaultTheme}`}>
      <div className="logo-container">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <img id='menu-icon' onClick={() => (showSideBar())} src={menuIcon} alt="" />
      </div>
  
      <div className="container">
        <div className="nav">
          <ul>
            <li><img id="home-icon" src={homeIcon}/><a href="#">Home</a></li>
            <li ><img id="tasks-icon" src={tasksIcon}/><a href="#">Tasks</a></li>
            <li ><img id="finance-icon" src={financeIcon}/><a href="#">Finance</a></li>
            <li><img id="pomodoro-icon" src={pomodoroIcon}/><a href="#">Pomodoro</a></li>
          </ul>
        </div>

        <hr/>

        <div className={`theme-selector ${defaultTheme}`}>
          <p>Dark</p>
          <div className="btn">
            <button onClick={() => (themeSelector())}></button>
          </div>
          <p>Light</p>
        </div>

        <div className="user-container">
          <img src="src/assets/user-avatar.png" alt="" />
          <div className="user">
            <p className="username">Rafael<img id="dropdown-icon" src={dropdownIcon}/></p>
            <p className='user-status'>Conected</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Sidebar

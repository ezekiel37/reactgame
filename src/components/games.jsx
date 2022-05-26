import React from 'react'
import { Link } from 'react-router-dom';
import './components.css'
function Games(props) {
  return (
    <div className='gameContainer'>
      <img className="gameImg"src={props.img} alt={props.name}></img>
          <h3> {props.name} </h3>
           <p> {props.desc}</p>
           <Link className="startButton"
           to={props.link}>Start game</Link>
    </div>
  )
}

export default Games;
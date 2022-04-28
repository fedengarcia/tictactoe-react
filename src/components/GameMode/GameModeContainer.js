import React from 'react';
import {NavLink} from 'react-router-dom';


export default function GameModeContainer () {


    return(<div className='select-mode-container'>
        
        <div className='select-mode'>
            <h1>Elige el modo de juego</h1>
            <NavLink  to="/PlayerInfo/Multiplayer" className="nav-link-button">Multijugador</NavLink>
            <NavLink  to="/PlayerInfo/Computer" className="nav-link-button">Computadora</NavLink>
            <NavLink  to="/Ranking" className="nav-link-button">Ver Ranking</NavLink>
        </div>


    </div>)
}
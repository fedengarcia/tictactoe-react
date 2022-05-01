import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import ActionsViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';

export default function GameModeContainer () {

    useEffect(() => {
        sessionStorage.setItem("playerOne", JSON.stringify({}));
        sessionStorage.setItem("playerTwo", JSON.stringify({}));
        sessionStorage.setItem("gameType", JSON.stringify({}));

    }, []);

    return(<ActionsViewContainer>
        
        <div className='game-mode'>
            <h1>Elige el modo de juego</h1>
            <NavLink  to="/PlayerInfo/Multiplayer" className="nav-link-button">Multiplayer</NavLink>
            <NavLink  to="/PlayerInfo/Computer" className="nav-link-button">Computer</NavLink>
            <NavLink  to="/Rules" className="nav-link-button">Reglas de puntos</NavLink>
            <NavLink  to="/Ranking" className="nav-link-button">Ver Ranking</NavLink>
        </div>


        </ActionsViewContainer>
        )
}
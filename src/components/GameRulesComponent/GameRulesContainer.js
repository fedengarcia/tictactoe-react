import React from 'react'
import ActionViewContainer from '../GameViewActionsTemplate/ActionsViewContainer'
import { useNavigate } from 'react-router-dom'


export default function GameRulesContainer() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/");
    }

    return (<ActionViewContainer>
        <div className="game-rules-container">
            <h2>REGLAS</h2>
            <p>Consideramos que en el juego Tic Tac Toe, aquel jugador que selecciona primero el centro tiene mas posibilidades de ganar</p>
            <p>Por este motivo hemos creado unas reglas para que el ganador sume puntos para el ranking dependiendo de como ejecuto su 3 en linea:</p>
            <ul>
                <li>Tres en Linea HORIZONTAL: 2 puntos</li>
                <li>Tres en Linea VERTICAL: 3 puntos</li>
                <li>Tres en Linea DIAGONAL: 1 punto</li>
            </ul>
            <button onClick={handleClick}>VOLVER AL MENU</button>
        </div>
        </ActionViewContainer>
    )
}
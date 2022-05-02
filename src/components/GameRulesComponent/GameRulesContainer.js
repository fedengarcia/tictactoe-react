import React from 'react'
import ActionViewContainer from '../GameViewActionsTemplate/ActionsViewContainer'
import { useNavigate } from 'react-router-dom'

// PANTALLA REGLAS
export default function GameRulesContainer() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/");
    }

    return (<ActionViewContainer>
        <h1>REGLAS</h1>
        <div className="game-rules-container">
            <p> Se establecen las siguientes reglas para que el jugador sume puntos dependiendo de como se ejecuta la jugada.</p>
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
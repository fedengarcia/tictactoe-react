import React from 'react'


// COMPONENTE TURNO - MUESTRA EL TURNO SIGUIENTE
export default function GameTurno ({gameType,playerTwo,playerOne,turnoJugador}) {

    return (
        <div className="turno-container">
            {gameType === "Multiplayer" ? 
            <h2>{`Turno de: ${turnoJugador === "O" ? playerOne.name : playerTwo.name}`}</h2>
            :
            <h2>{`Turno de: ${turnoJugador === "O" ? playerOne.name : "Computadora"}`}</h2>
            }
        </div>
    )
}
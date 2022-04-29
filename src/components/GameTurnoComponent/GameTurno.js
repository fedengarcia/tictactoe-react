import React from 'react'



export default function GameTurno ({gameType,players,turnoJugador}) {

    return (
        <div className="turno-container">
            {gameType === "Multiplayer" ? 
            <h2>{`Turno de: ${turnoJugador === "O" ? players.playerOne.name : players.playerTwo.name}`}</h2>
            :
            <h2>{`Turno de: ${turnoJugador === "O" ? players.playerOne.name : "Computadora"}`}</h2>
            }
        </div>
    )
}
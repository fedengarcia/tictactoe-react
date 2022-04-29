import { useEffect, useState } from "react"




export default function Tablero ({players,gameType}) {
    const [turnoJugador,setTurnoJugador] = useState("");


    useEffect(() => {
        setTurnoJugador(Math.floor(Math.random()*["O","X"].length))
    }, []);

    return (
        <>
        <div className="timer-container">
            <h2>Timer: </h2>
        </div>
        <div className="players-container">
            {gameType === "Computer" 
            ? <>
                <h2>{`Player O: ${players.playerOne.name}`}</h2>
                <h2>VS</h2>
                <h2>computadora</h2>
            </>
            : <>
                <h2>{`Player O: ${players.playerOne.name}`}</h2>
                <h2>VS</h2>
                <h2>{`Player X: ${players.playerTwo.name}`}</h2>
            </>
        }
            
        </div>
        <div className="tablero-container">

        </div>

        <div className="turno-container">
            {gameType === "Multiplayer" ? 
            <h2>{`Turno de: ${turnoJugador === 0 ? players.playerOne.name : players.playerTwo.name}`}</h2>
            :
            <h2>{`Turno de: ${turnoJugador === 0 ? players.playerOne.name : "Computadora"}`}</h2>
            }
        </div>

        </>)
}
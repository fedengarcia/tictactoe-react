import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom';





export default function GameFinishView ({setPlay, setTablero,tablero, winner,gameType}) {
    const navigate = useNavigate();

    const handlePlay = () =>{
        setTablero(tablero.fill(""))
        // GUARDAR EN FIREBASE PUNTOS DEL GANADOR
        setPlay(true);
    }

    const handleRoute = () => {
        navigate(`/PlayerInfo/${gameType}`);
    }

    return (
        <div className="game-finish-container">
            {winner.name && 
                <><h2>{`Ganador: ${winner.name}`}</h2>
                <h2>{`Haz sumado: ${winner.points} puntos a tu historial`}</h2>
                </>}
            {!winner.name && <h2>Empate</h2>}
            <button onClick={handlePlay}>Jugar de nuevo</button>
            <button onClick={handleRoute}>Cambiar jugadores</button>
        </div>
    )
}
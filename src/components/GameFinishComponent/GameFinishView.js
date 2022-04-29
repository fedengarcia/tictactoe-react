import React from 'react'
import { useNavigate} from 'react-router-dom';





export default function GameFinishView ({setPlay, setTablero,tablero, winner,gameType}) {
    const navigate = useNavigate();

    const handlePlay = () =>{
        setTablero(tablero.fill(""))
        // GUARDAR EN FIREBASE PUNTOS DEL GANADOR
        setPlay(true);
    }

    const handleRoute = (value) => {
        if(value === "jugadores"){
            navigate(`/PlayerInfo/${gameType}`);
        }else{
            navigate(`/`);
        }
    }

    return (
        <div className="game-finish-container">
            {winner.name !== "Computer" 
            ? 
                <>
                    <h2>{`Ganador: ${winner.name}`}</h2>
                    <h2>{`Haz sumado: ${winner.points} puntos a tu historial`}</h2>
                </>
            : 
                <h2>{`Ganador: ${winner.name}`}</h2>
            }
            {!winner.name && <h2>Empate</h2>}
            <button onClick={handlePlay}>JUGAR DE NUEVo</button>
            <button onClick={() => handleRoute("jugadores")}>CAMBIAR JGUADORES</button>
            <button onClick={() => handleRoute("menu")}>VOLVER AL MENU</button>
        </div>
    )
}
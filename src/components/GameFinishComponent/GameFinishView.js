import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import ActionViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';

export default function GameFinishView ({setPlay, setTablero,tablero, winner,gameType}) {
    const navigate = useNavigate();

    const handlePlay = () =>{
        setTablero(tablero.fill(""))
        setPlay(true);
    }

    const handleRoute = (value) => {
        if(value === "jugadores"){
            navigate(`/PlayerInfo/${gameType}`);
        }else{
            navigate(`/`);
        }
    }

    return (<ActionViewContainer>
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
                <button onClick={handlePlay}>JUGAR DE NUEVO</button>
                <button onClick={() => handleRoute("jugadores")}>CAMBIAR JGUADORES</button>
                <button onClick={() => handleRoute("menu")}>VOLVER AL MENU</button>
            </div>
        </ActionViewContainer>
    )
}
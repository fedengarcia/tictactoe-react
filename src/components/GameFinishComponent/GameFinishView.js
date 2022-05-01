import React from 'react'
import { useNavigate} from 'react-router-dom';
import ActionViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';

export default function GameFinishView ({setPlay, setTablero,tablero, gameResult,gameType}) {
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
    console.log(gameResult)
return (<ActionViewContainer>
            <div className="game-finish-container">


                {gameResult.empate && <h2>Empate</h2>}  
            
                {gameResult.winner && 
                
                    <>
                        <h2>{`Ganador: ${gameResult.winner.name}`}</h2>
                        {gameResult.winner.name === "Computer" ? <></> 
                        : <h2>{`Haz sumado: ${gameResult.winner.points} puntos a tu historial`}</h2>}
                    </>
                
                }
                
                <button onClick={handlePlay}>JUGAR DE NUEVO</button>
                <button onClick={() => handleRoute("jugadores")}>CAMBIAR JUGADORES</button>
                <button onClick={() => handleRoute("menu")}>VOLVER AL MENU</button>
            </div>
        </ActionViewContainer>
    )
}
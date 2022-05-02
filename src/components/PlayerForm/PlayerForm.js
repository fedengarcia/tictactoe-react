import React, {useContext} from 'react';
import {UseGameContext} from '../../context/GameContext';
import ButtonPlayGame from '../GameButtonPlayComponent/ButtonPlayGame';


// FORMULARIO DE JUGADOR/ES
export default function PlayerForm ({setError}) {

    const {setPlayers,players,gameType} = useContext(UseGameContext)

    // GUARDO DATOS DEL JUGADOR UNO
    const handlePlayerO_Data = (e) => {
        setPlayers({...players,playerOne:{
            name:e.target.value,
        }})
        sessionStorage.setItem("playerOne", JSON.stringify({name:e.target.value}));
    }
    
    // GUARDO DATOS DEL JUGADOR DOS
    const handlePlayerX_Data = (e) => {
        setPlayers({...players,playerTwo:{
            name:e.target.value,
        }})
        sessionStorage.setItem("playerTwo",JSON.stringify({name:e.target.value}));
    }


    return (<>
        <form>
        {gameType === "Multiplayer" ? <h2>Ingrese los nombres de los jugadores</h2> : <h2>Ingrese nombre del jugador</h2>}

            <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador O'
                    id="playerONameid"
                    onChangeCapture={handlePlayerO_Data}
                    />
            </div>
            {gameType === "Multiplayer" ? <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador X'
                    id="playerXNameid"
                    onChangeCapture={handlePlayerX_Data}
                    />	
            </div> : <></>}           

        </form>

        <ButtonPlayGame setError={setError} players={players} gameType={gameType}/>

        </>
    )
}
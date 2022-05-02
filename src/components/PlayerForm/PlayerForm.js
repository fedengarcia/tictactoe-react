import React, {useContext,useEffect, useState} from 'react';
import {UseGameContext} from '../../context/GameContext';
import ButtonPlayGame from '../GameButtonPlayComponent/ButtonPlayGame';


// FORMULARIO DE JUGADOR/ES
export default function PlayerForm ({setError}) {

    const {setPlayers,players,gameType} = useContext(UseGameContext)
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");

    useEffect(() => {
        setPlayerOne(JSON.parse(sessionStorage.getItem("playerOne")));
        setPlayerTwo(JSON.parse(sessionStorage.getItem("playerTwo")));
    }, [players]);

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

        <ButtonPlayGame setError={setError} gameType={gameType} playerOne={playerOne} playerTwo={playerTwo}/>

        </>
    )
}
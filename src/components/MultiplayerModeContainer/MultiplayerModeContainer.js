import React, { useState } from 'react'
import PlayerDataContainer from '../PlayerDataContainer/PlayerDataContainer'
import TicTacToe from '../TicTacToe/TicTacToe';


//ENVIA PARAMETROS PARA EJECUTAR EL JUEGO EN MULTIPLAYER
export default function MultiplayerModeContainer () {
    const [play,setPlay] = useState(false);

    return(    
    <div className='game-container'>
        <h1>Multiplayer Mode</h1>
        {play === false ? <PlayerDataContainer setPlay={setPlay}/> : <TicTacToe gameType={"multiplayer"}/>}
    </div>)
}
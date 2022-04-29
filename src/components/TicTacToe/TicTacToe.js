import React, { useState, useContext } from 'react';
import { UseGameContext } from '../../context/GameContext';
import Tablero from '../Tablero/Tablero';
import GameFinishView from '../GameFinishComponent/GameFinishView';


export default function TicTacToe () {
    const [play, setPlay] = useState(true);
    const {players,gameType} = useContext(UseGameContext)
    
    
    return (
    <div className="game-container">
       <h1>Tipo de juego: {gameType}</h1>
        {play === false
         ? <GameFinishView setPlay={setPlay}/>
         : <Tablero players={players} gameType={gameType}/>
        }

    </div>
    )
}
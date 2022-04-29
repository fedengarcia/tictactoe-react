import React, { useState, useContext } from 'react';
import { UseGameContext } from '../../context/GameContext';
import StartGameView from '../StartGameComponent/StartGameView';
import Tablero from '../TableroComponent/Tablero';

export default function TicTacToe () {
    const [play, setPlay] = useState(false);
    const {players,gameType} = useContext(UseGameContext)

    return (
    <div className="game-container">
       <h1>{gameType}</h1>
        {play === false
         ? <StartGameView setPlay={setPlay}/>
         : <Tablero players={players}/>

        }

    </div>
    )
}
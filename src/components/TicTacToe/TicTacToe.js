import React, { useState, useContext } from 'react';
import { UseGameContext } from '../../context/GameContext';

export default function TicTacToe () {
    const [play, setPlay] = useState(false);
    const {players,gameType} = useContext(UseGameContext)

    return (<div>
       <h1>{gameType}</h1>
        {/* {play === false
         ? <StartGame setPlay={setPlay}/>
         : <Tablero />

        } */}

    </div>
    )
}
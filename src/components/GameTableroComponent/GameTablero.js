import React from 'react'
import GameTableroBox from "../GameTableroBoxComponent/GameTableroBox";
import ActionViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';


// COMPONENTE QUE CONSTRUYE GRID DEL TABLERO
export default function GameTablero ({handlePlay,tablero}) {

    return (
        <ActionViewContainer>
        <div className="tablero-container">
            <div className="tablero-grid">
                {tablero.map((tablerobox,i) =>
                 <GameTableroBox key={i} position={i} handlePlay={handlePlay} value={tablero[i]}/>)}
            </div>
        </div>
        </ActionViewContainer>)
}



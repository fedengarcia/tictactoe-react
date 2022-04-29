import GameTableroBox from "../GameTableroBoxComponent/GameTableroBox";



export default function GameTablero ({handlePlay,tablero}) {

    return (
        <div className="tablero-container">
            <div className="tablero-grid">
                {tablero.map((tablerobox,i) =>
                 <GameTableroBox key={i} position={i} handlePlay={handlePlay} value={tablero[i]}/>)}
            </div>
        </div>
    )
}



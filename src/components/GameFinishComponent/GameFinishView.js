




export default function GameFinishView ({setPlay, setTablero,tablero, winner}) {

    const handlePlay = () =>{
        setTablero(tablero.fill(""))
        // GUARDAR EN FIREBASE PUNTOS DEL GANADOR
        setPlay(true);
    }

    return (
        <div className="game-finish-container">
            {winner.name && 
                <><h2>{`Ganador: ${winner.name}`}</h2>
                <h2>{`Haz sumado: ${winner.points} puntos a tu historial`}</h2>
                </>}
            {!winner.name && <h2>Empate</h2>}
            <button onClick={handlePlay}>Jugar de nuevo</button>
            <button>Ranking</button>
        </div>
    )
}





export default function GameFinishView ({setPlay}) {

    const handlePlay = () =>{
        setPlay(true);
    }

    return (
        <div className="game-finish-container">
            <button onClick={handlePlay}>Jugar de nuevo</button>
            <button>Reglas de puntos</button>
        </div>
    )
}
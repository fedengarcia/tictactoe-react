




export default function StartGameView ({setPlay}) {


    const handlePlay = () =>{
        setPlay(true);
    }

    return (
        <div className="start-game-container">
            <button onClick={handlePlay}>Jugar</button>
            <button>Reglas de puntos</button>
        </div>
    )
}
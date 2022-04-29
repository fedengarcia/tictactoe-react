


export default function GameTableroBox({value,handlePlay,position}) {


    return (
        <div className="tablero-box" onClick={() => handlePlay(position)}>
            <button><h3>{value}</h3></button>
        </div>
    )
}
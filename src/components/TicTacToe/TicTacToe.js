import React, { useState, useEffect, useContext } from 'react';
import { UseGameContext } from '../../context/GameContext';
import GameTablero from '../GameTableroComponent/GameTablero';
import GameFinishView from '../GameFinishComponent/GameFinishView';
import GameTurno from '../GameTurnoComponent/GameTurno';
import GameTimer from '../GameTimerComponent/GameTimer';
import GamePlayer from '../GamePlayersComponent/GamePlayer';
import { checkWinner } from '../helper';


export default function TicTacToe () {
    const [play, setPlay] = useState(true);
    const [timer,setTimer] = useState(undefined);
    const [turnoJugador,setTurnoJugador] = useState("");
    const [tablero,setTablero] = useState(["","","","","","","","",""])

    const {players,gameType,} = useContext(UseGameContext)
    const winner = checkWinner(tablero,players);

    useEffect(() => {
        
        if (Math.floor(Math.random()*["O","X"].length) === 0){
            setTurnoJugador("O");
        }else{
            setTurnoJugador("X");
        }
        
    }, []);


    useEffect(() => {
        if(winner){
            setPlay(false);
        }
    }, [winner]);



    const handlePlay = (position) => {
        const tableroCopy =  tablero.slice();
        if(tableroCopy[position] === ""){
            tableroCopy[position] =  turnoJugador;
            setTablero(tableroCopy);

            if(turnoJugador === "X"){
                setTurnoJugador("O");
            }else{
                setTurnoJugador("X");
            }
        }
        
        
    }

    return (
        <div className="game-container">
        <h1>Tipo de juego: {gameType}</h1>
            {play === false
            ? <GameFinishView setPlay={setPlay} winner={winner} tablero={tablero} setTablero={setTablero}/>
            : <>
                
                <GameTimer timer={timer} setTimer={setTimer}/>
                
                <GamePlayer players={players} gameType={gameType}/>
            
                <GameTablero handlePlay={handlePlay} tablero={tablero}/>
                
                <GameTurno players={players} gameType={gameType} turnoJugador={turnoJugador}/>
            
            </>
            }

        </div>
    )
}
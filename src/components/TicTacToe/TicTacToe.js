import React, { useState, useEffect, useContext } from 'react';
import { UseGameContext } from '../../context/GameContext';
import GameTablero from '../GameTableroComponent/GameTablero';
import GameFinishView from '../GameFinishComponent/GameFinishView';
import GameTurno from '../GameTurnoComponent/GameTurno';
import GamePlayer from '../GamePlayersComponent/GamePlayer';
import { checkWinner } from '../helper';
import { addWinnerPlayer } from '../../firebase/FirebaseClient';


export default function TicTacToe () {
    const [play, setPlay] = useState(true);
    const [turnoJugador,setTurnoJugador] = useState("X");
    const [tablero,setTablero] = useState(["","","","","","","","",""])
    const {players,gameType,} = useContext(UseGameContext)
    const [winner,setWinner] = useState("");


    // ELIJO AL AZAR QUIEN COMIENZA EL JUEGo
    useEffect(() => {
        
        if (Math.floor(Math.random()*["O","X"].length) === 0){
            setTurnoJugador("O");
        }else{
            setTurnoJugador("X");
        }

    }, []);




    //JUEGA LA COMPUTADORA
    useEffect(() => {            
        if(turnoJugador === "X" && gameType==="Computer"){
            var tableroCopy =  tablero.slice();
            var randomPosition = Math.floor(Math.random()*tableroCopy.length);
            

            while (tableroCopy[randomPosition] !== ""){
                randomPosition = Math.floor(Math.random()*tableroCopy.length);
            } 
            tableroCopy[randomPosition] = turnoJugador;
            setTablero(tableroCopy);
            setTurnoJugador("O")
        }
        setWinner(checkWinner(tablero,players, gameType));


    }, [turnoJugador,tablero,gameType]);

    // CHEQUEO SI HAY UN GANADOR PARA PARAR EL JUEGO
    useEffect(() => {
        if(winner){
            addWinnerPlayer(winner,gameType);
            setPlay(false);
        }
    }, [winner]);



    const handlePlay = (position) => {
        var tableroCopy =  tablero.slice();

        if(tableroCopy[position] === ""){
            tableroCopy[position] = turnoJugador;
            setTablero(tableroCopy);
            if(turnoJugador === "X"){
                setTurnoJugador("O");
            }else{
                setTurnoJugador("X");
            }
    
        }
        setWinner(checkWinner(tablero,players, gameType));


    }

    return (
        <div className="game-container">
            <h1>Tipo de juego: {gameType}</h1>
        
            {play === false
            ? <GameFinishView setPlay={setPlay} winner={winner} tablero={tablero} setTablero={setTablero} gameType={gameType}/>
            : <>
                                
                <GamePlayer players={players} gameType={gameType}/>
            
                <GameTablero handlePlay={handlePlay} tablero={tablero}/>
                
                <GameTurno players={players} gameType={gameType} turnoJugador={turnoJugador}/>
            
            </>
            }

        </div>
    )
}
import React, { useState, useEffect, useContext } from 'react';
import { UseGameContext } from '../../context/GameContext';
import GameTablero from '../GameTableroComponent/GameTablero';
import GameFinishView from '../GameFinishComponent/GameFinishView';
import GameTurno from '../GameTurnoComponent/GameTurno';
import GamePlayer from '../GamePlayersComponent/GamePlayer';
import { checkWinner } from '../helper';
import { addWinnerPlayer } from '../../firebase/FirebaseClient';
import { useNavigate } from 'react-router-dom';

export default function TicTacToe () {
    // JUGABILIDAD
    const [play, setPlay] = useState(true);
    const [turnoJugador,setTurnoJugador] = useState("X");
    const [tablero,setTablero] = useState(["","","","","","","","",""])
    
    // DATOS PARA FIREBASE
    const {players,gameType,} = useContext(UseGameContext)
    const [winner,setWinner] = useState("");

    // JUGADORES PARA LOCALSTORAGE
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        setPlayerOne(JSON.parse(sessionStorage.getItem("playerTwo")));
        setPlayerTwo(JSON.parse(sessionStorage.getItem("playerOne")));
    }, []);


    // ELEGIR AL AZAR QUIEN COMIENZA EL JUEGO
    useEffect(() => {
        
        if (Math.floor(Math.random()*["O","X"].length) === 0){
            setTurnoJugador("O");
        }else{
            setTurnoJugador("X");
        }

    }, []);




    //MOVIMIENTO DE LA COMPUTADORA -- Si hay tiempo agregar IA
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

    // VERIFICO SI HAY UN GANADOR PARA PARAR EL JUEGO
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


    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="game-container">
            <div className="game-header">
                <button onClick={handleBack}>VOLVER ATRAS</button>
                <h1>Tipo de juego: {gameType}</h1>
            </div>
            
            {play === false
            ? <GameFinishView setPlay={setPlay} winner={winner} tablero={tablero} setTablero={setTablero} gameType={gameType}/>
            : <>
                                
                <GamePlayer playerOne={playerOne} playerTwo={playerTwo} gameType={gameType}/>
            
                <GameTablero handlePlay={handlePlay} tablero={tablero}/>
                
                <GameTurno playerOne={playerOne} playerTwo={playerTwo} gameType={gameType} turnoJugador={turnoJugador}/>
            
            </>
            }

        </div>
    )
}
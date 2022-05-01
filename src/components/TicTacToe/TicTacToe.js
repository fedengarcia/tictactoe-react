import React, { useState, useEffect, useContext } from 'react';
import GameTablero from '../GameTableroComponent/GameTablero';
import GameFinishView from '../GameFinishComponent/GameFinishView';
import GameTurno from '../GameTurnoComponent/GameTurno';
import GamePlayer from '../GamePlayersComponent/GamePlayer';
import { checkGameResult } from '../helper';
import { addWinnerPlayer,addLooserPlayer,addEmpateDoc } from '../../firebase/FirebaseClient';
import { useNavigate } from 'react-router-dom';

export default function TicTacToe () {
    // JUGABILIDAD
    const [play, setPlay] = useState(true);
    const [turnoJugador,setTurnoJugador] = useState("X");
    const [tablero,setTablero] = useState(["","","","","","","","",""])
    
    // DATOS PARA FIREBASE
    const [gameResult,setGameResult] = useState({});

    // CARGO SESSION STORAGE
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [type, setType] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        setPlayerOne(JSON.parse(sessionStorage.getItem("playerOne")));
        setPlayerTwo(JSON.parse(sessionStorage.getItem("playerTwo")));
        setType(JSON.parse(sessionStorage.getItem("gameType")))
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
        if(turnoJugador === "X" && type.gameType==="Computer"){
            var tableroCopy =  tablero.slice();
            var randomPosition = Math.floor(Math.random()*tableroCopy.length);
            

            while (tableroCopy[randomPosition] !== ""){
                randomPosition = Math.floor(Math.random()*tableroCopy.length);
            } 
            tableroCopy[randomPosition] = turnoJugador;
            setTablero(tableroCopy);
            setTurnoJugador("O")
        }
        setGameResult(checkGameResult(tablero,playerOne,playerTwo, type.gameType));

    }, [turnoJugador,tablero,type.gameType]);

    //  AL OBTENER UN RESULTADO DEL JUEGO, GUARDO LOS DOCUMENTOS EN FIREBASE y PAUSEO EL JUEGO
    useEffect(() => {
        if(gameResult){
            if(gameResult.winner){
                addWinnerPlayer(gameResult.winner,type.gameType);
                addLooserPlayer(gameResult.looser,type.gameType);
                setPlay(false);
            }
            if(gameResult.empate){
                addEmpateDoc(gameResult.empate,type.gameType);
                setPlay(false);
            }
        }

    }, [gameResult]);



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
        setGameResult(checkGameResult(tablero,playerOne,playerTwo, type.gameType));


    }


    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="game-container">
            <div className="game-header">
                <button onClick={handleBack}>VOLVER ATRAS</button>
                <h1>Tipo de juego: {type.gameType}</h1>
            </div>
            
            {play === false
            ? <GameFinishView setPlay={setPlay} gameResult={gameResult} tablero={tablero} setTablero={setTablero} gameType={type.gameType}/>
            : <>
                                
                <GamePlayer playerOne={playerOne} playerTwo={playerTwo} gameType={type.gameType}/>
            
                <GameTablero handlePlay={handlePlay} tablero={tablero}/>
                
                <GameTurno playerOne={playerOne} playerTwo={playerTwo} gameType={type.gameType} turnoJugador={turnoJugador}/>
            
            </>
            }

        </div>
    )
}
import React, {useState,useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {UseGameContext} from '../../context/GameContext';

export default function PlayerForm ({gameType}) {
    const [errorName,setErrorName]=useState(false)

    const navigate = useNavigate();
    const {setPlayers,players} = useContext(UseGameContext)

    const handlePlayerOneData = (e) => {
        setPlayers({...players,playerOne:{
            name:e.target.value,
            puntos: 0,
        }})
    }
    
    const handlePlayerTwoData = (e) => {
        setPlayers({...players,playerTwo:{
            name:e.target.value,
            puntos: 0,
        }})
    }


    const handlePlay = () => {

           
        if(gameType === "Multiplayer"){
            if((players.playerOne === undefined || players.playerTwo === undefined)){
                console.log("Error faltan nombres")
                setErrorName(true);
            }else if((players.playerOne.name === "" || players.playerTwo.name === "") ){
                console.log("Error faltan nombres")
                setErrorName(true);
            }else{
                    //GUARDO DATOS EN LOCAL STORAGE
                    navigate("/Game/Multiplayer");
            }

        }else if(gameType === "Computer"){
            if(players.playerOne.name  === "" || players.playerOne  === undefined){
                console.log("Error faltan nombre")
                setErrorName(true);
            }else{
                //GUARDO DATOS EN LOCAL STORAGE
                navigate("/Game/Computer");
            }
        }

    }

    return (<>
        <form className='form-player-data'>
        {gameType === "Multiplayer" ? <h2>Ingrese los nombres de los jugadores</h2> : <h2>Ingrese nombre del jugador</h2>}

            <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador 1'
                    id="playerOneNameid"
                    onChangeCapture={handlePlayerOneData}
                    />
            </div>
            {gameType === "Multiplayer" ? <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador 2'
                    id="playerTwoNameid"
                    onChangeCapture={handlePlayerTwoData}
                    />	
            </div> : <></>}           

        </form>
        {errorName && <p>Recuerda ingresar nombre/s</p>}
        <div className='form-actions'>
            <NavLink to="/" className="nav-link-button"><button>VOLVER ATRAS</button></NavLink>
            <button className="boton-validar" onClick={handlePlay}>JUGAR</button>
        </div>
        </>
    )
}
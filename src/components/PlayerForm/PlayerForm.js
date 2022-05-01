import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {UseGameContext} from '../../context/GameContext';

export default function PlayerForm ({setError}) {

    const navigate = useNavigate();
    const {setPlayers,players,gameType} = useContext(UseGameContext)

    const handlePlayerO_Data = (e) => {
        setPlayers({...players,playerOne:{
            name:e.target.value,
        }})
        sessionStorage.setItem("playerOne", JSON.stringify({name:e.target.value}));
    }
    
    const handlePlayerX_Data = (e) => {
        setPlayers({...players,playerTwo:{
            name:e.target.value,
        }})
        sessionStorage.setItem("playerTwo",JSON.stringify({name:e.target.value}));
    }


    const handlePlay = () => {
        //VERIFICA TIPO DE JUEGO Y SI HAY NOMBRE DE JUGADOR
        if(gameType === "Multiplayer"){
            if((players.playerOne === undefined || players.playerTwo === undefined)){

                setError("nombreVacio");

            }else if((players.playerOne.name === "" || players.playerTwo.name === "") ){
                
                setError("nombreVacio");

            }else if(players.playerOne.name === players.playerTwo.name){
                setError("nombresIguales");
            }else{
                navigate("/Game/Multiplayer");
            }

        }else if(gameType === "Computer"){
            if( players.playerOne  === undefined){

                setError("nombreVacio");

            }else if(players.playerOne.name  === ""){

                setError("nombreVacio");

            }else{
                navigate("/Game/Computer");
            }
        }
           

    }

    return (<>
        <form>
        {gameType === "Multiplayer" ? <h2>Ingrese los nombres de los jugadores</h2> : <h2>Ingrese nombre del jugador</h2>}

            <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador O'
                    id="playerONameid"
                    onChangeCapture={handlePlayerO_Data}
                    />
            </div>
            {gameType === "Multiplayer" ? <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador X'
                    id="playerXNameid"
                    onChangeCapture={handlePlayerX_Data}
                    />	
            </div> : <></>}           

        </form>
        <div className='form-actions'>
            <NavLink to="/" className="nav-link-button"><button>VOLVER AL MENU</button></NavLink>
            <button className="boton-validar" onClick={handlePlay}>JUGAR</button>
        </div>
        </>
    )
}
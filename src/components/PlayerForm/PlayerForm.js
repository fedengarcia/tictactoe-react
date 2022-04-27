import React, {useState,useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function PlayerForm ({setPlay}) {
    const [playerOneName,setPlayerOneName] = useState("");
    const [playerTwoName,setPlayerTwoName] = useState("");

    const [errorName,setErrorName]=useState(true)
    

    const location = useLocation()    


    const handlePlayerOneData = (e) => {
        setPlayerOneName(e.target.value)
        if(playerOneName === ""){
            console.log(playerOneName)
            console.log("Vacio")
            setErrorName(true);
        }
    }
    const handlePlayerTwoData = (e) => {
        
        setPlayerTwoName(e.target.value)
        if(playerTwoName === ""){
            setErrorName(true);
        }
    }

    const handlePlay = () => {
        if(location.pathname === "/MultiplayerMode"){
            
        }else if(location.pathname === "/ComputerMode"){
            if(playerOneName === ""){
                console.log(playerOneName)
                setErrorName(true);
            }
        }
        

        if(errorName){
            //SetLocalStorage
            //Save Info Firebase
            setPlay(true);
        }

    }

    return (
        <form className='form-player-data'>
            <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador 1'
                    id="playerOneNameid"
                    onChangeCapture={handlePlayerOneData}
                    />
            </div>
            {location.pathname === "/MultiplayerMode" ? <div className="input-span">
                    <input className="form-input" 
                    type="text" 
                    placeholder='Nombre Jugador 2'
                    id="playerTwoNameid"
                    onChangeCapture={handlePlayerTwoData}
                    />	
            </div> : <></>}
            {errorName === false ? <span><p>Debe ingresar nombre/s</p></span> : <></>}
            
            <div className='form-actions'>
            <NavLink to="/" className="nav-link-button"><button>Volver atras</button></NavLink>
            <button className="boton-validar" onClick={handlePlay}>JUGAR</button>

            </div>

        </form>
    )
}
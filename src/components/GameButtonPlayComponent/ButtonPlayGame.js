import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function ButtonPlayGame({gameType,setError,playerOne,playerTwo}) {
    const navigate = useNavigate();


    //VERIFICA TIPO DE JUEGO Y NOMBRES PARA EJECUTAR EL JUEGO
    const handlePlay = () => {
        if(gameType === "Multiplayer"){
            if((playerOne.name === undefined || playerTwo.name === undefined)){
                setError("nombreVacio");

            }else if((playerOne.name === "" || playerTwo.name === "") ){
                setError("nombreVacio");

            }else if(playerOne.name === playerTwo.name){
                setError("nombresIguales");
            }else{
                navigate("/Game/Multiplayer");
            }

        }else if(gameType === "Computer"){
            if( playerOne.name  === undefined){

                setError("nombreVacio");

            }else if(playerOne.name  === ""){

                setError("nombreVacio");

            }else{
                navigate("/Game/Computer");
            }
        }
           

    }


    return (       
         <div className='form-actions'>
            <button onClick={() => navigate("/")}>VOLVER AL MENU</button>
            <button onClick={handlePlay}>JUGAR</button>
        </div>)
}
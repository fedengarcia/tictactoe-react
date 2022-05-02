import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function ButtonPlayGame({gameType,players,setError}) {
    const navigate = useNavigate();
    //VERIFICA TIPO DE JUEGO Y SI HAY NOMBRE DE JUGADOR LO EJECUTA
    const handlePlay = () => {
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


    return (       
         <div className='form-actions'>
            <button onClick={() => navigate("/")}>VOLVER AL MENU</button>
            <button onClick={handlePlay}>JUGAR</button>
        </div>)
}
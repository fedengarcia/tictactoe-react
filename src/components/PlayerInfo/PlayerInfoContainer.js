import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { UseGameContext } from '../../context/GameContext';
import PlayerForm from '../PlayerForm/PlayerForm';


export default function PlayerInfoContainer () {
    const {gameType} = useParams();
    const {setGameType} = useContext(UseGameContext);
    const [error,setError] =  useState(false);

    useEffect(() => {
        setGameType(gameType)
    }, [setGameType,gameType]);

    return(
        <div className='player-info-container'>
            <h1>{`${gameType} Mode`}</h1>
            <div className='player-form-container'>
                <PlayerForm setError={setError}/>
            </div>
            
            
            {error && <div className='error-container'>
                {gameType === "Multiplayer" ? <p>Debes ingresar los nombres para jugar</p>
                : <p>Debes ingresar un nombre para jugar</p>
                }
            </div>}
            
        </div>
    )
}
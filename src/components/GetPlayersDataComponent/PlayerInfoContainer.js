import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { UseGameContext } from '../../context/GameContext';
import ActionViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';
import PlayerForm from '../PlayerForm/PlayerForm';


export default function PlayerInfoContainer () {
    const {gameType} = useParams();
    const {setGameType} = useContext(UseGameContext);
    const [error,setError] =  useState(false);

    useEffect(() => {
        setGameType(gameType)
        sessionStorage.setItem("gameType", JSON.stringify({gameType}));

    }, [setGameType,gameType]);

    useEffect(() => {
        setTimeout(() => {
            setError(false);
        }, 2000);
    }, [error]);

    return(<ActionViewContainer>
            <h1>{`${gameType} Mode`}</h1>
            <div className='player-form-container'>
                <PlayerForm setError={setError}/>
            </div>
            
            
            {error && <div className='error-container'>
                {gameType === "Multiplayer" ? <p>Debes ingresar los nombres para jugar</p>
                : <p>Debes ingresar un nombre para jugar</p>
                }
            </div>}
            
        
        </ActionViewContainer>
    )
}
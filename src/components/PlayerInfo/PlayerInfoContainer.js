import React from 'react'
import {useParams} from 'react-router-dom';
import PlayerForm from '../PlayerForm/PlayerForm';


export default function PlayerInfoContainer () {
    const {gameType} = useParams();

    return(
        <div className='player-info-container'>
            <h1>{`${gameType} Mode`}</h1>
            <div className='player-form-container'>
                <PlayerForm gameType={gameType}/>
            </div>
            
        </div>
    )
}
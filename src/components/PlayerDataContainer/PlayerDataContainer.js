import React, {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import PlayerForm from '../PlayerForm/PlayerForm';


export default function PlayerDataContainer ({setPlay}) {

    return (
        <div className='player-data-container'>
           <PlayerForm setPlay={setPlay}/>
        </div>
    )
}
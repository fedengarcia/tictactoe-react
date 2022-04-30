import React, { useEffect, useState } from "react";
import { getWinners } from "../../firebase/FirebaseClient";
import ActionsViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';
import {useNavigate} from 'react-router-dom';
import Loader from '../LoaderComponent/Loader';

export default function RankingContainer () {
    const [loader, setLoader] = useState(true);
    const [winners,setWinners] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        getWinners().then(res => {
            setWinners(res);
            setLoader(false)
        })
    }, []);

    const handleClick = () => {
        navigate("/");
    }

    return (
    <ActionsViewContainer>
    <div className="ranking-container">
        <h1>Ranking por puntos</h1>
        <div className="ranking-grid">
            <div className="ranking-grid-item-title"><h2>Name</h2></div>
            <div className="ranking-grid-item-title"><h2>Wins</h2></div>
            <div className="ranking-grid-item-title"><h2>Points</h2></div>
        </div>
        {loader === true ? <Loader/> 
        : winners.map((winner,i) => 
            <div key={i} className="winners-grid">
                <div className="winners-grid-item-player"><h2>{winner.name}</h2></div>
                <div className="winners-grid-item-player"><h2>{winner.win}</h2></div>
                <div className="winners-grid-item-player"><h2>{winner.points}</h2></div>
            </div>)
        }

    <button onClick={handleClick}>VOLVER AL MENU</button>

    </div>
    </ActionsViewContainer>
    )
}
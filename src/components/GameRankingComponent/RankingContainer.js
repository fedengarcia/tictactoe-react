import React, { useEffect, useState, useContext } from "react";
import { getWinners } from "../../firebase/FirebaseClient";
import ActionsViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';
import {useNavigate} from 'react-router-dom';
import Loader from '../LoaderComponent/Loader';
import { UseGameContext } from "../../context/GameContext";

export default function RankingContainer () {
    const [loader, setLoader] = useState(true);
    const {winnersRanking, setLoadModel,loadModel,setWinnersDB,clearRanking} = useContext(UseGameContext);

    const navigate = useNavigate();

    useEffect(() => {
        getWinners().then(res => {
            setWinnersDB(res);
            setLoadModel(!loadModel);
            setLoader(false)
        });
    }, []);


    const handleClick = (value) => {
        if(value === "menu"){
            clearRanking();
            navigate("/");
        }else{
            navigate("/EstadisticasAvanzadas");
        }

    }

    return (
    <ActionsViewContainer>
        <div className="rank-title">
            <h1>Ranking por puntos</h1>
        </div>

        <div className="ranking-container">
            
            <div className="ranking-grid rankmob">
                <div className="ranking-grid-item-title"><h2>Name</h2></div>
                <div className="ranking-grid-item-title"><h2>Wins</h2></div>
                <div className="ranking-grid-item-title"><h2>Points</h2></div>
                <div className="ranking-grid-item-title"><h2>Game Type</h2></div>
                {/* <div className="winners-grid-item-title"><h2>PlayerType</h2></div> */}

            </div>
            {loader === true ? <Loader/> 
            : winnersRanking.map((winner,i) => 
                    <div key={i} className="winners-grid rankmob">
                        <div className="winners-grid-item-player"><h3>{winner.name}</h3></div>
                        <div className="winners-grid-item-player"><h3>{winner.wins}</h3></div>
                        <div className="winners-grid-item-player"><h3>{winner.points}</h3></div>
                        <div className="winners-grid-item-player"><h3>{winner.gameType}</h3></div>
                        {/* <div className="winners-grid-item-player"><h2>{winner.playerType}</h2></div> */}
                    </div>)
            }


        </div>

        <div className="ranking-action-button">
            <button onClick={() => handleClick("menu")}>VOLVER AL MENU</button>
            <button onClick={handleClick}>ESTADISTICAS AVANZADAS</button>
        </div>
        


    </ActionsViewContainer>
    )
}
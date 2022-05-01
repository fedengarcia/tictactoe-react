import React, { useEffect, useState, useContext } from "react";
import { getEmpates, getLoosers, getWinners } from "../../firebase/FirebaseClient";
import ActionsViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';
import {useNavigate} from 'react-router-dom';
import { UseGameContext } from "../../context/GameContext";
import WinnersRanking from "./WinnersRanking";
import LoosersRanking from "./LoosersRanking";
import EmpatesRanking from "./EmpatesRanking";
import PointsRanking from './PointsRanking';

export default function RankingContainer () {
    const [loader, setLoader] = useState(true);
    const [rankingType,setRankingType] = useState("winners");
    const {pointsRanking,
            winnersRanking,
            loosersRanking,
            empatesRanking, 
            setWinnersDB,
            setLoosersDB,
            setEmpatesDB,
            clearRanking, 
            setLoadModel,
            loadModel} = useContext(UseGameContext);

    const navigate = useNavigate();

    useEffect(() => {
        getWinners().then(res => {
            setWinnersDB(res);
            setLoadModel(!loadModel);
            setLoader(false)
        });

        getLoosers().then(res => {
            setLoosersDB(res);
            setLoadModel(!loadModel);
            setLoader(false)
        });

        getEmpates().then(res => {
            setEmpatesDB(res);
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

    const handleRanking = (type) => {
        setRankingType(type);
    }


    return (
    <ActionsViewContainer>
        <div className="rank-title">
            <h1>Ranking por puntos</h1>
        </div>

        <div className="ranking-container">
            <div className="ranking-nav">
            <button onClick={() => handleRanking("points")}>Puntos</button>
                <button onClick={() => handleRanking("winners")}>Ganadores</button>
                <button onClick={() => handleRanking("loosers")}>Perdedores</button>
                <button onClick={() => handleRanking("empates")}>Empates</button>
            </div>

            {rankingType === "points" ? <PointsRanking loader={loader} pointsRanking={pointsRanking}/> : <></>}
            {rankingType === "winners" ? <WinnersRanking loader={loader} winnersRanking={winnersRanking}/> : <></>}
            {rankingType === "loosers" ? <LoosersRanking loader={loader} loosersRanking={loosersRanking}/> : <></>}
            {rankingType === "empates" ? <EmpatesRanking loader={loader} empatesRanking={empatesRanking}/> : <></>}
            
            <div className="ranking-action-button">
                <button onClick={() => handleClick("menu")}>VOLVER AL MENU</button>
                {/* <button onClick={handleClick}>ESTADISTICAS AVANZADAS</button> */}
            </div>
            
        </div>




    </ActionsViewContainer>
    )
}
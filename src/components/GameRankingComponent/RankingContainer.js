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
    const [rankingType,setRankingType] = useState("Ganadores");
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
// eslint-disable-next-line
    }, []);



    const handleClick = (value) => {
        if(value === "menu"){
            clearRanking();
            navigate("/");
        }
    }

    const handleRanking = (type) => {
        setRankingType(type);
    }


    return (
    <ActionsViewContainer>
        <div className="rank-title">
            <h1>{`Ranking de ${rankingType}`}</h1>
        </div>

        <div className="ranking-container">
            <div className="ranking-nav">
            <button onClick={() => handleRanking("Puntos")}>Puntos</button>
                <button onClick={() => handleRanking("Ganadores")}>Ganadores</button>
                <button onClick={() => handleRanking("Perdedores")}>Perdedores</button>
                <button onClick={() => handleRanking("Empates")}>Empates</button>
            </div>

            {rankingType === "Puntos" ? <PointsRanking loader={loader} pointsRanking={pointsRanking}/> : <></>}
            {rankingType === "Ganadores" ? <WinnersRanking loader={loader} winnersRanking={winnersRanking}/> : <></>}
            {rankingType === "Perdedores" ? <LoosersRanking loader={loader} loosersRanking={loosersRanking}/> : <></>}
            {rankingType === "Empates" ? <EmpatesRanking loader={loader} empatesRanking={empatesRanking}/> : <></>}
            
            <div className="ranking-action-button">
                <button onClick={() => handleClick("menu")}>VOLVER AL MENU</button>
            </div>
            
        </div>




    </ActionsViewContainer>
    )
}
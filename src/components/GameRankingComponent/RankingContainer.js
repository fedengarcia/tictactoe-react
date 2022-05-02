import React, { useEffect, useState, useContext } from "react";
import { getEmpates, getLoosers, getWinners } from "../../firebase/FirebaseClient";
import ActionsViewContainer from '../GameViewActionsTemplate/ActionsViewContainer';
import {useNavigate} from 'react-router-dom';
import { UseGameContext } from "../../context/GameContext";
import NavbarRanking from "./NavbarRanking";
import Ranking from "./Ranking";

// RANKING CONTAINER
export default function RankingContainer () {
    const [loader, setLoader] = useState(true);
    const [rankingType,setRankingType] = useState("Ganadores");
    // GAME CONTEXT
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

    // GUARDO DATOS DE PARTIDAS EN SUS RESPECTIVOS ARRAYS Y MODELADO DE DATOS PARA EL RANKING
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
            <NavbarRanking handleRanking={handleRanking}/>

            {rankingType === "Puntos" ? <Ranking loader={loader} rankingList={pointsRanking} rankingType={rankingType}/> : <></>}
            {rankingType === "Ganadores" ? <Ranking loader={loader} rankingList={winnersRanking} rankingType={rankingType} /> : <></>}
            {rankingType === "Perdedores" ? <Ranking loader={loader} rankingList={loosersRanking} rankingType={rankingType}/> : <></>}
            {rankingType === "Empates" ? <Ranking loader={loader} rankingList={empatesRanking} rankingType={rankingType}/> : <></>}
            
            <div className="ranking-action-button">
                <button onClick={() => handleClick("menu")}>VOLVER AL MENU</button>
            </div>
            
        </div>




    </ActionsViewContainer>
    )
}
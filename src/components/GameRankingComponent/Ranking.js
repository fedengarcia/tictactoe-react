import React, { useEffect, useState } from 'react';
import Loader from '../LoaderComponent/Loader';

// RANKING COMPONENT - DEPENDIENDO DEL RANKING TYPE SELECCIONADO
export default function Ranking({loader,rankingList,rankingType}) {
    const [ranking, setRanking] = useState(rankingType);

    useEffect(() => {
        if(rankingType === "Puntos"){
            setRanking("points")
        }
        if(rankingType === "Ganadores"){
            setRanking("wins")
        }
        if(rankingType === "Perdedores"){
            setRanking("losses")
        }
        if(rankingType === "Empates"){
            setRanking("empates")
        }
    }, []);

    return (<>
            <div className="ranking-grid rankmob">
                <div className="ranking-grid-item"><h2>Nombre</h2></div>
                <div className="ranking-grid-item"><h2>{rankingType}</h2></div>
                <div className="ranking-grid-item"><h2>Tipo de Juego</h2></div>

            </div>
            {loader === true ? <Loader/> 
            : rankingList.map((player,i) => 
                    <div key={i} className="result-grid rankmob">
                        
                        {i<10 && 
                            <>
                                <div className="result-grid-item"><h3>{player.name}</h3></div>
                                <div className="result-grid-item"><h3>{`${player[ranking]}`}</h3></div>
                                <div className="result-grid-item"><h3>{player.gameType}</h3></div>
                            </>
                        }          
            
                    </div>
            )}


        </> 
    )
}
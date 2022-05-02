import React from 'react';
import Loader from '../LoaderComponent/Loader';


export default function WinnersRanking({loader,winnersRanking}) {

    return (<>
            <div className="ranking-grid rankmob">
                <div className="ranking-grid-item"><h2>Name</h2></div>
                <div className="ranking-grid-item"><h2>Wins</h2></div>
                <div className="ranking-grid-item"><h2>Game Type</h2></div>
                {/* <div className="winners-grid-item-title"><h2>PlayerType</h2></div> */}

            </div>
            {loader === true ? <Loader/> 
            : winnersRanking.map((winner,i) => 
            
                    <div key={i} className="result-grid rankmob">
                         
                        {i<10 && 
                            <>
                                <div className="result-grid-item"><h3>{winner.name}</h3></div>
                                <div className="result-grid-item"><h3>{winner.wins}</h3></div>
                                <div className="result-grid-item"><h3>{winner.gameType}</h3></div>
                                {/* <div className="winners-grid-item-player"><h2>{winner.playerType}</h2></div> */}
                            </>
                        }   
                </div>
            )}


        </> 
    )
}
import React from 'react';
import Loader from '../LoaderComponent/Loader';


export default function PointsRanking({loader,pointsRanking}) {

    return (<>
            <div className="ranking-grid rankmob">
                <div className="ranking-grid-item"><h2>Name</h2></div>
                <div className="ranking-grid-item"><h2>Points</h2></div>
                <div className="ranking-grid-item"><h2>Game Type</h2></div>
                {/* <div className="winners-grid-item-title"><h2>PlayerType</h2></div> */}

            </div>
            {loader === true ? <Loader/> 
            : pointsRanking.map((player,i) => 
                    <div key={i} className="result-grid rankmob">
                        <div className="result-grid-item"><h3>{player.name}</h3></div>
                        <div className="result-grid-item"><h3>{player.points}</h3></div>
                        <div className="result-grid-item"><h3>{player.gameType}</h3></div>
                        {/* <div className="winners-grid-item-player"><h2>{winner.playerType}</h2></div> */}
            </div>)
            }


        </> 
    )
}
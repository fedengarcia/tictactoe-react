import React from 'react';
import Loader from '../LoaderComponent/Loader';


export default function LoosersRanking({loader,loosersRanking}) {

    return (<>
            <div className="ranking-grid rankmob">
                <div className="ranking-grid-item"><h2>Name</h2></div>
                <div className="ranking-grid-item"><h2>Losses</h2></div>
                <div className="ranking-grid-item"><h2>Game Type</h2></div>
                {/* <div className="winners-grid-item-title"><h2>PlayerType</h2></div> */}

            </div>
            {loader === true ? <Loader/> 
            : loosersRanking.map((looser,i) => 
                    <div key={i} className="result-grid rankmob">
                        <div className="result-grid-item"><h3>{looser.name}</h3></div>
                        <div className="result-grid-item"><h3>{looser.losses}</h3></div>
                        <div className="result-grid-item"><h3>{looser.gameType}</h3></div>
                        {/* <div className="winners-grid-item-player"><h2>{winner.playerType}</h2></div> */}
            </div>)
            }


        </> 
    )
}
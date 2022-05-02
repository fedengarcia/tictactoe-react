import React from 'react';
import Loader from '../LoaderComponent/Loader';


export default function EmpatesRanking({empate,empatesRanking}) {

    return (<>
            <div className="ranking-grid rankmob">
                <div className="ranking-grid-item"><h2>Name</h2></div>
                <div className="ranking-grid-item"><h2>Empates</h2></div>
                <div className="ranking-grid-item"><h2>Game Type</h2></div>

            </div>
            {empate === true ? <Loader/> 
            : empatesRanking.map((empate,i) => 
                    <div key={i} className="result-grid rankmob">
                        
                        {i<10 && 
                            <>
                                <div className="result-grid-item"><h3>{empate.name}</h3></div>
                                <div className="result-grid-item"><h3>{empate.empates}</h3></div>
                                <div className="result-grid-item"><h3>{empate.gameType}</h3></div>
                            </>
                        }
                    
                    </div>
            )}


        </> 
    )
}
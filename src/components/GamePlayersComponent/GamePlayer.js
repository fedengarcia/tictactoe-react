import React from 'react'



export default function GamePlayer ({players, gameType}) {


    return (
        <div className="players-container">
                {gameType === "Computer" 
                ? <>
                    <h2>{`Player O: ${players.playerOne.name}`}</h2>
                    <h2>VS</h2>
                    <h2>computadora</h2>
                </>
                : <>
                    <h2>{`Player O: ${players.playerOne.name}`}</h2>
                    <h2>VS</h2>
                    <h2>{`Player X: ${players.playerTwo.name}`}</h2>
                </>
                }
            
        </div>
    )
}
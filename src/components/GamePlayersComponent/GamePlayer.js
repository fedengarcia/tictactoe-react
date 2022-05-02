import React, { useState,useEffect } from 'react'

// COMPONENTE QUE MUESTRA QUIEN ESTA JUGANDO y TIPO DE JUEGO
export default function GamePlayer ({gameType,playerOne,playerTwo}) {

    return (<>
        {playerOne !== "" && <div className="players-container">
                {gameType === "Computer" 
                ? <>
                    <h2>{`Player O: ${playerOne.name}`}</h2>
                    <h2>VS</h2>
                    <h2>Computadora</h2>
                </>
                : <>
                    <h2>{`Player O: ${playerOne.name}`}</h2>
                    <h2>VS</h2>
                    <h2>{`Player X: ${playerTwo.name}`}</h2>
                </>
                
                }
            </div>
        }
        </>
    )
}
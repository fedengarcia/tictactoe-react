import { useState,createContext,useEffect } from "react";

export const UseGameContext = createContext();

export function GameContext ({children}) {
    const [players, setPlayers]=useState({})

    useEffect(()=>{
        console.log(players)
    },[players])


    return(
    <UseGameContext.Provider value={{setPlayers,players}}>
        {children}
    </UseGameContext.Provider>)
}
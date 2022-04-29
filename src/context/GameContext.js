import { useState,createContext,useEffect } from "react";

export const UseGameContext = createContext();

export function GameContext ({children}) {
    const [players, setPlayers]=useState({})
    const [gameType,setGameType] = useState(undefined);

    // useEffect(()=>{
    //     console.log(players)
    // },[players])


    return(
    <UseGameContext.Provider value={{setPlayers,players,gameType,setGameType}}>
        {children}
    </UseGameContext.Provider>)
}
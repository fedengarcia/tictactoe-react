import { useState,createContext, useEffect} from "react";

export const UseGameContext = createContext();

export function GameContext ({children}) {
    const [players, setPlayers]=useState({})
    const [winnersDB,setWinnersDB] = useState([]);
    const [loadModel,setLoadModel] = useState(false)
    const [winnersRanking,setWinnersRanking] = useState([]);


    useEffect(() => {
        winnersDB.forEach(item => {
            modelDataRanking(item);
        });
    }, [loadModel]);


    //DEVUELVO -1 SI NO EXISTE EL ITEM
    const getWinnerIndex = (name) =>{
        const position = winnersRanking.findIndex(item => (item.name === name)); //&& item.playerType === playerType
        return position;
    }

    //MODELO DATOS PARA EL RANKING DE GANADORES
    const modelDataRanking = (winner) => {
        if(winner.gameType === "Multiplayer"){
            let result = getWinnerIndex(winner.name);
            //NO EXISTE ELEMENTO
            if(result === -1){
                winnersRanking.push(winner);
                // setWinnersRanking(winnersRanking => [...winnersRanking,winner])
    
                // EXISTE, ACTUALIZO DATOS Y ORDENO ARRAY
            }else{
                const winnersRankingCopy = [...winnersRanking];
                winnersRankingCopy[result]["points"] = winnersRankingCopy[result]["points"] + winner.points;
                winnersRankingCopy[result]["wins"] = winnersRankingCopy[result]["wins"] + 1;
                setWinnersRanking(winnersRankingCopy.sort((a, b) => (a.points < b.points) ? 1 : -1)
                )
            }
        }
        
    }

    // VACIO RANKING
    const clearRanking = () => {
        setWinnersRanking([]);
    }


    return(
    <UseGameContext.Provider value={{clearRanking,winnersRanking,setLoadModel,loadModel,setWinnersDB,setPlayers,players}}>
        {children}
    </UseGameContext.Provider>)
}
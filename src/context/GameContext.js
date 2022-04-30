import { useState,createContext, useEffect} from "react";

export const UseGameContext = createContext();

export function GameContext ({children}) {
    const [players, setPlayers]=useState({})
    const [gameType,setGameType] = useState(undefined);
    const [winnersDB,setWinnersDB] = useState([]);
    const [loadModel,setLoadModel] = useState(false)
    const [winnersRanking,setWinnersRanking] = useState([]);

    useEffect(() => {
        winnersDB.forEach(item => {
            modelDataRanking(item);
        });
    }, [loadModel]);


    //DEVUELVE -1 SI NO EXISTE EL ITEM
    const getWinnerIndex = (name,gameType) =>{
        const position = winnersRanking.findIndex(item => (item.name === name && item.gameType === gameType)); //&& item.playerType === playerType
        return position;
    }

    //MODELO DATOS PARA EL RANK DE GANADORES
    const modelDataRanking = (winner) => {

        let result = getWinnerIndex(winner.name,winner.gameType);
        if(result === -1){
            winnersRanking.push(winner);
            // setWinnersRanking(winnersRanking => [...winnersRanking,winner])
        }else{
            const winnersRankingCopy = [...winnersRanking];
            winnersRankingCopy[result]["points"] = winnersRankingCopy[result]["points"] + 1;
            winnersRankingCopy[result]["wins"] = winnersRankingCopy[result]["wins"] + 1;
            setWinnersRanking(winnersRankingCopy);
        }
    }


    const clearRanking = () => {
        setWinnersRanking([]);
    }


    return(
    <UseGameContext.Provider value={{clearRanking,winnersRanking,setLoadModel,loadModel,setWinnersDB,setPlayers,players,gameType,setGameType}}>
        {children}
    </UseGameContext.Provider>)
}
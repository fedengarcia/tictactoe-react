import { useState,createContext, useEffect} from "react";

export const UseGameContext = createContext();

export function GameContext ({children}) {
    const [players, setPlayers]=useState({})
    const [gameType,setGameType] = useState(undefined);
    const [winnersDB,setWinnersDB] = useState([]);
    const [loosersDB,setLoosersDB] = useState([]);
    const [empatesDB,setEmpatesDB] = useState([]);
    
    
    const [pointsRanking,setPointsRanking] = useState([]);
    const [winnersRanking,setWinnersRanking] = useState([]);
    const [loosersRanking,setLoosersRanking] = useState([]);
    const [empatesRanking,setEmpatesRanking] = useState([]);
    const [loadModel,setLoadModel] = useState(false)



    useEffect(() => {
        winnersDB.forEach(item => {
            modelDataRankingWinners(item);
        });
        loosersDB.forEach(item => {
            modelDataRankingLoosers(item);
        });
        empatesDB.forEach(item => {
            modelDataRankingEmpates(item);
        })

    }, [loadModel]);


    //DEVUELVO -1 SI NO EXISTE EL ITEM
    const getIndex = (name,array) =>{
        const position = array.findIndex(item => (item.name === name)); //&& item.playerType === playerType
        return position;
    }

    //MODELO DATOS PARA EL RANKING DE GANADORES Y RANKING DE PUNTOS
    const modelDataRankingWinners = (winner) => {
        if(winner.gameType === "Multiplayer"){
            let result = getIndex(winner.name,winnersRanking);
            //NO EXISTE ELEMENTO
            if(result === -1){
                winnersRanking.push(winner);
                pointsRanking.push(winner);

                // setWinnersRanking(winnersRanking => [...winnersRanking,winner])
    
                // EXISTE, ACTUALIZO DATOS Y ORDENO ARRAY POR VICTORIAS
            }else{
                const winnersRankingCopy = [...winnersRanking];
                winnersRankingCopy[result]["wins"] = winnersRankingCopy[result]["wins"] + 1;
                setWinnersRanking(winnersRankingCopy.sort((a, b) => (a.points < b.points) ? 1 : -1));

                const pointsRankingCopy = [...pointsRanking];
                pointsRankingCopy[result]["points"] = pointsRankingCopy[result]["points"] + winner.points;
                setPointsRanking(pointsRankingCopy.sort((a, b) => (a.points < b.points) ? 1 : -1)
                )
            }
        }
        
    }

    //MODELO DATOS PARA EL RANKING DE PERDEDORES
    const modelDataRankingLoosers = (looser) => {
        if(looser.gameType === "Multiplayer"){
            let result = getIndex(looser.name,loosersRanking);
            //NO EXISTE ELEMENTO
            if(result === -1){
                loosersRanking.push(looser);
                // setWinnersRanking(winnersRanking => [...winnersRanking,winner])

                // EXISTE, ACTUALIZO DATOS Y ORDENO ARRAY POR CANTIDAD DE PARTIDAS PERDIDAS
            }else{
                const looserRankingCopy = [...loosersRanking];
                looserRankingCopy[result]["losses"] = looserRankingCopy[result]["losses"] + 1;
                setLoosersRanking(looserRankingCopy.sort((a, b) => (a.losses < b.losses) ? 1 : -1));
            }
        }
        
    }

    //MODELO DATOS PARA EL RANKING DE EMPATES
    const modelDataRankingEmpates = (empatePlayer) => {

        if(empatePlayer.gameType === "Multiplayer"){
            let result = getIndex(empatePlayer.name,empatesRanking);
            //NO EXISTE ELEMENTO
            if(result === -1){
                empatesRanking.push(empatePlayer);
                // setWinnersRanking(winnersRanking => [...winnersRanking,winner])

                // EXISTE, ACTUALIZO DATOS Y ORDENO ARRAY POR CANTIDAD DE PARTIDAS PERDIDAS
            }else{
                const empatesRankingCopy = [...empatesRanking];
                empatesRankingCopy[result]["empates"] = empatesRankingCopy[result]["empates"] + 1;
                setEmpatesRanking(empatesRankingCopy.sort((a, b) => (a.empates < b.empates) ? 1 : -1));
            }
        }
        
    }



    // VACIO RANKING
    const clearRanking = () => {
        setWinnersRanking([]);
        setLoosersRanking([]);
        setPointsRanking([]);
        setEmpatesRanking([]);
    }


    return(
    <UseGameContext.Provider 
        value={{clearRanking,
            setWinnersDB,
            setLoosersDB,
            setEmpatesDB,
            winnersRanking,
            loosersRanking,
            empatesRanking,
            pointsRanking,
            setLoadModel,
            loadModel,
            setPlayers,
            players,
            setGameType,
            gameType}}>
        
        {children}
    </UseGameContext.Provider>)
}
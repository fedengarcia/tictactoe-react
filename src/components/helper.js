

export function checkWinner (tablero,players) {
    const winnerPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const checkEmpate = tablero.filter(box => box === "");
    if(checkEmpate.length === 0){
        return ("empate");
    }
    
    for (let i = 0; i<winnerPatterns.length; i++){
        let points = 0;
        const [a,b,c] = winnerPatterns[i];
        if(tablero[a] !== "" && (tablero[a] === tablero[b]) && (tablero[b] === tablero[c])){
            if(i === 0 || i === 1 || i === 2){
                points = 2
            }
            if(i === 3 || i === 4 || i === 5){
                points = 3
            }
            if(i === 6 || i === 7){
                points = 1
            }
            
            if(tablero[a] === "O"){
                return ({
                    name: players.playerOne.name,
                    points: points,
                    playerType: tablero[a],
                })    
            }else{
                return ({
                    name: players.playerTwo.name,
                    points: points,
                    playerType: tablero[a],
                }) 
            }
           
        }
    }

    return null;
}
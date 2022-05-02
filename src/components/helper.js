
export function checkGameResult (tablero,playerOne,playerTwo, gameType) {
    //PATRONES PARA OBTENER VICTORIA
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

    //VERIFICO SI HAY EMPATE y RETORNO OBJETO EMPATE
    const checkEmpate = tablero.filter(box => box === "");
    if(checkEmpate.length === 0){
        if(gameType === "Multiplayer"){
            return ({
                empate:{
                    playerOne: playerOne.name,
                    playerTwo: playerTwo.name,
                }})
        }else{
            return ({
                empate:{
                    playerOne: playerOne.name,
                    playerTwo: "Computer",
                }})
        }
        
    }
    
    // VERIFICO GANADOR Y PERDEDOR Y RETORNO SUS RESPECTIVOS OBJETOS
    for (let i = 0; i<winnerPatterns.length; i++){
        let points = 0;

        //GUARDO UN PATRON
        const [a,b,c] = winnerPatterns[i];
        
        // COMPARO LOS ITEMS DEL PATRON 
        if(tablero[a] !== "" && (tablero[a] === tablero[b]) && (tablero[b] === tablero[c])){
            // PUNTOS PARA TRES EN LINEA VERTICAL
            if(i === 0 || i === 1 || i === 2){
                points = 2
            }
            // PUNTOS PARA TRES EN LINEA HORIZONTAL
            if(i === 3 || i === 4 || i === 5){
                points = 3
            }
            // PUNTOS PARA TRES EN LINEA DIAGONAL
            if(i === 6 || i === 7){
                points = 1
            }
            
            if(gameType === "Computer"){
                if(tablero[a] === "O"){
                    return ({
                    winner:{
                        name: playerOne.name,
                        points: points,
                        playerType: tablero[a],
                    },
                    looser:{
                        name: "Computer",
                        playerType: "X",
                    }})
                }else{
                    return ({
                        winner:{
                            name: "Computer",
                            points: points,
                            playerType: "X",
                        },
                        looser:{
                            name: playerOne.name,
                            playerType: "O",
                        }}) 
                }
            }else{
                if(tablero[a] === "O"){
                    return ({
                    winner:{
                        name: playerOne.name,
                        points: points,
                        playerType: tablero[a],
                    },
                    looser:{
                        name: playerTwo.name,
                        playerType: "X",
                    }})    
                }else{
                    return ({
                        winner:{
                            name: playerTwo.name,
                            points: points,
                            playerType: tablero[a],
                        },
                        looser:{
                            name: playerOne.name,
                            playerType: "O",
                        }})   
                        
                }
            }
           
        }
    }
}



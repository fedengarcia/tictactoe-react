import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { query, collection, addDoc, getDocs, where } from "firebase/firestore";


// FIREBASE CONFIGURACION
const firebaseConfig = {
    apiKey: "AIzaSyAO4t0MLtzqz4AbmgSimWMBwgq5-zVwjj0",
    authDomain: "registerloginapp-481f7.firebaseapp.com",
    projectId: "registerloginapp-481f7",
    storageBucket: "registerloginapp-481f7.appspot.com",
    messagingSenderId: "12755199869",
    appId: "1:12755199869:web:856b1e3a6e4a8a03d64e14",
    measurementId: "G-EFVXR92ZZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);



// OBTENGO UN JUGADOR
export const getPlayer = async(playerName) => {
  try{
    const playerDoc = await getDocs(query(collection(database,"winners"),where("name","==",playerName)));
    const player = playerDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
    return(player);
  }catch(e){
    console.error("Error reading document", e);
  }
    
}

// AGREGAR DOCUMENTOS DE EMPATE POR JUGADOR
export const addEmpateDoc = async (empate,gameType) => {
  const playerEmpate1Doc = { 
      name:empate.playerOne,
      empates:1,
      gameType: gameType,
  }
  const playerEmpate2Doc = { 
    name:empate.playerTwo,
    empates:1,
    gameType: gameType,
}
  try {
    await addDoc(collection(database, "empates"), playerEmpate1Doc);
    await addDoc(collection(database, "empates"), playerEmpate2Doc);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// AGREGAR DOCUMENTO DE JUGADOR QUE PERDIO
export const addLooserPlayer =  async (player,gameType) => {
  const looserPlayerDoc = {
    name: player.name,
    playerType: player.playerType,
    losses: 1,
    gameType: gameType,
    createdAt: new Date(),
  }

  try {
      await addDoc(collection(database, "loosers"), looserPlayerDoc);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

// AGREGAR DOCUMENTO DE JUGADOR QUE GANO
export const addWinnerPlayer = async (player,gameType) => {
    const winnerPlayerDoc = {
        name: player.name,
        points:player.points,
        playerType: player.playerType,
        wins: 1,
        gameType: gameType,
        createdAt: new Date(),
    }

    try {
        await addDoc(collection(database, "winners"), winnerPlayerDoc);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

// OBTENER GANADORES
export const getWinners = async () => {
  try{
    const winnersDoc = await getDocs(query(collection(database,"winners"))); //,limit(limite))
    const winners = winnersDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
    return winners;
  }catch (e) {
    console.error("Error reading documents: ",e)
  }

}

// OBTENER PERDEDORES
export const getLoosers = async () => {
  try{
    const winnersDoc = await getDocs(query(collection(database,"loosers"))); //,limit(limite))
    const winners = winnersDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
    return winners;
  }catch (e) {
    console.error("Error reading documents: ",e)
  }

}

// OBTENER EMPATES
export const getEmpates = async () => {
  try{
    const winnersDoc = await getDocs(query(collection(database,"empates"))); //,limit(limite))
    const winners = winnersDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
    return winners;
  }catch (e) {
    console.error("Error reading documents: ",e)
  }

}
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { query, collection, addDoc, doc, getDocs, where, setDoc } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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




export const getPlayer = async(playerName) => {
  try{
    const playerDoc = await getDocs(query(collection(database,"winners"),where("name","==",playerName)));
    const player = playerDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
    return(player);
  }catch(e){
    console.error("Error reading document", e);
  }
    
}

// export const updatePlayerPointsAndWins = (dataBasePlayer) => {
//     console.log(dataBasePlayer)
//     const player =  doc(database, 'winners', dataBasePlayer.id);
//     console.log("TU JUGADOR",player)
//     setDoc(player, { wins: true }, { merge: true });
//   }

export const addWinnerPlayer = async (player) => {
    const winnerPlayer = {
        name: player.name,
        points:player.points,
        playerType: player.playerType,
        wins: 1,
        createdAt: new Date(),
    }

    try {
        const docRef = await addDoc(collection(database, "winners"), winnerPlayer);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

export const getWinners = async () => {
  try{
    const winnersDoc = await getDocs(query(collection(database,"winners")));
    const winners = winnersDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
    return winners;
  }catch (e) {
    console.error("Error reading documents: ",e)
  }

}
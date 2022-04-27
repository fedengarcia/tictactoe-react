
import './styles/style.scss';
// import {useState} from 'react';
import Router from './Router/Router';

function App() {
  // const [gameType, setGameType] = useState(undefined);


  return (
    <Router/>
    // <div className="App">
    //   {gameType === undefined && <SelectModeContainer setGameType={setGameType}/>}
    //   {gameType === "multiplayer" ? <MultiplayerModeContainer/> : <ComputerModeContainer/>}
    // </div>
  );
}

export default App;

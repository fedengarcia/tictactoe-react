
import './styles/style.scss';
// import {useState} from 'react';
import Router from './Router/Router';
import { GameContext } from './context/GameContext';

function App() {
  // const [gameType, setGameType] = useState(undefined);


  return (
    <GameContext>
      <Router/>
    </GameContext>
  );
}

export default App;

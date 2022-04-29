import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import GameModeContainer from '../components/GameModeComponent/GameModeContainer';
import RankingContainer from '../components/RankingContainer/RankingContainer';
import TicTacToe from '../components/TicTacToe/TicTacToe';
import PlayerInfoContainer from '../components/PlayerInfo/PlayerInfoContainer';

const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<GameModeContainer/>}/>
                <Route path='/PlayerInfo/:gameType' element={<PlayerInfoContainer/>}/>
                <Route path='/Game/:gameType' element={<TicTacToe/>}/>
                <Route path='/Ranking' element={<RankingContainer/>}/>
            </Routes>

        </BrowserRouter>
    )

}


export default Router;
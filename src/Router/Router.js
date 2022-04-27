import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import ComputerModeContainer from '../components/ComputerModeContainer/ComputerModeContainer';
import MultiplayerModeContainer from '../components/MultiplayerModeContainer/MultiplayerModeContainer';
import SelectModeContainer from '../components/SelectModeContainer/SelecModeContainer';
import RankingContainer from '../components/RankingContainer/RankingContainer';

const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SelectModeContainer/>}/>
                <Route path='/MultiplayerMode' element={<MultiplayerModeContainer/>}/>
                <Route path='/ComputerMode' element={<ComputerModeContainer/>}/>
                <Route path='/Ranking' element={<RankingContainer/>}/>
            </Routes>

        </BrowserRouter>
    )

}


export default Router;
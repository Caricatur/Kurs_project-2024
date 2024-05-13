import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Region from '../Area/Region'
import {ROUTES} from "../../utils/toutes";
import Calc from '../Calc/Calc';

const AppRoutes = () => {
  const [currRegion, setCurrRegion] = useState()

  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path={ROUTES.REGION} element={<Region value={currRegion} changeName={(name) => setCurrRegion(name)}/>} />
        <Route path={ROUTES.CALC} element={<Calc/>} />

        {/* <Route path={ROUTES.REGION} element={<Region value={currGame}/>} /> */}
        {/* value={currGame} changeId={(name) => setCurrGame(name)} myGame={gameList.list} isLoading={gameList.isLoading} */}

    </Routes>
  )
}

export default AppRoutes 
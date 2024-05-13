import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import India from '../Area/India'
import {ROUTES} from "../../utils/toutes";
import Calc from '../Calc/Calc';
import Germany from '../Area/Germany';
import USA from '../Area/USA';
import CIS from '../Area/CIS';

const AppRoutes = () => {
  const [currRegion, setCurrRegion] = useState()

  return (
    <Routes>
        <Route index element={<Home />}/>
        {/* <Route path={ROUTES.REGION} element={<Region value={currRegion} changeName={(name) => setCurrRegion(name)}/>} /> */}
        <Route path={ROUTES.CALC} element={<Calc/>} />
        <Route path={"/region/Индия"} element={<India />}/>
        <Route path={"/region/Германия"} element={<Germany />}/>
        <Route path={"/region/США"} element={<USA />}/>
        <Route path={"/region/СНГ"} element={<CIS />}/>


        {/* <Route path={ROUTES.REGION} element={<Region value={currGame}/>} /> */}
        {/* value={currGame} changeId={(name) => setCurrGame(name)} myGame={gameList.list} isLoading={gameList.isLoading} */}

    </Routes>
  )
}

export default AppRoutes 
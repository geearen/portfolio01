import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Splash from '../pages/Splash';
import Home from '../pages/Home';

function RouterConfig(){
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Splash/>} /> */}
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;
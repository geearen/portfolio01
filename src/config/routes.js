import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Splash from "../pages/Splash";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Photo from "../pages/Photo";
import UnderconstructPage from "../pages/Underconstruct";

function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Splash/>} /> */}
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/photo" element={<Photo />} /> */}
        <Route exact path="/" element={<UnderconstructPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;

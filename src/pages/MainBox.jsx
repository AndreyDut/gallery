import React from "react";
import { Route, Routes } from "react-router-dom";
import { WrapMainBox } from "./mainBox.style";
import MainPage from "./MainPage/MainPage";
import Albums from "./Albums/Albums";
import ViewAlbum from "./Albums/ViewAlbum/ViewAlbum";

const MainBox = () => {
  return (
    <WrapMainBox>
      <Routes>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/albums"} element={<Albums/>}>
          <Route path={":albumId"} element={<ViewAlbum/>} />
        </Route>
        <Route path={"/"} element={<div></div>}>
          <Route path={":content"} element={<div></div>} />
        </Route>
      </Routes>
    </WrapMainBox>
  );
};

export default MainBox;

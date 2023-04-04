import React from "react";
import { Route, Routes } from "react-router-dom";
import { WrapMainBox } from "./mainBox.style";
import MainPage from "./MainPage/MainPage";

const MainBox = () => {
  return (
    <WrapMainBox>
      <Routes>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/"} element={<div></div>}>
          <Route path={":content"} element={<div></div>} />
        </Route>
      </Routes>
    </WrapMainBox>
  );
};

export default MainBox;

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { WrapMainBox } from "./mainBox.style";
import MainPage from "./MainPage/MainPage";
import Albums from "./Albums/Albums";
import ViewAlbum from "./Albums/ViewAlbum/ViewAlbum";
import Catalog from "./Catalog/Catalog";
import { getFavoritesPhotos } from "../store/slices/appSlice/appExtraReducers";
import { useDispatch } from "react-redux";

const MainBox = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesPhotos());
  }, []);

  return (
    <WrapMainBox>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/albums"} element={<Albums />}>
          <Route path={":albumId"} element={<ViewAlbum />} />
        </Route>
        <Route path={"/catalog"} element={<Catalog />} />
        <Route path={"/"} element={<div></div>}>
          <Route path={":content"} element={<div></div>} />
        </Route>
      </Routes>
    </WrapMainBox>
  );
};

export default MainBox;

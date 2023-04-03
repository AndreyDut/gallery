import React from "react";
import { Route, Routes } from "react-router-dom";

const MainBox = () => {
  return (
    <div>
      <Routes>
        <Route path={"/account"} element={<div></div>}>
          <Route path={":content"} element={<div></div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainBox;

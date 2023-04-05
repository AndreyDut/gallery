import React, { useState } from "react";
import { WrapAppHeader } from "./appHeader.style";
import { NavLink } from "react-router-dom";
import BtnClose from "../BtnClose/BtnClose";
import { burgerIcon } from "../../assets/svg_icons";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const [localState, setLocalState] = useState({ burgerOpen: false });
  const favoritesLength = useSelector((state) => state.app.favorites.length);

  const handlerActions = (key) => () => {
    switch (key) {
      case "toggleBurger":
        setLocalState((state) => ({ ...state, burgerOpen: !state.burgerOpen }));
        break;

      default:
        break;
    }
  };

  return (
    <WrapAppHeader burgerOpen={localState.burgerOpen}>
      <button
        className="wrap-head-burger"
        onClick={handlerActions("toggleBurger")}
      >
        {burgerIcon}
      </button>
      <div className="wrap-head-nav">
        <BtnClose onClose={handlerActions("toggleBurger")} />
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/albums"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Альбомы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Избранные
              {favoritesLength ? (
                <div className="badge">{favoritesLength}</div>
              ) : null}
            </NavLink>
          </li>
        </ul>
      </div>
    </WrapAppHeader>
  );
};

export default AppHeader;

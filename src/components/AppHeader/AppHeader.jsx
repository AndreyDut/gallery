import React, { useEffect, useState } from "react";
import { WrapAppHeader } from "./appHeader.style";
import { NavLink, useLocation } from "react-router-dom";
import BtnClose from "../BtnClose/BtnClose";
import { burgerIcon } from "../../assets/svg_icons";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const favoritesLength = useSelector((state) => state.app.favorites.length);
  const location = useLocation();

  const toggleBurger = () => setBurgerOpen((state) => !state);

  useEffect(() => {
    setBurgerOpen(false)
  }, [location])

  return (
    <WrapAppHeader burgerOpen={burgerOpen}>
      <button
        className="wrap-head-burger"
        onClick={toggleBurger}
      >
        {burgerIcon}
      </button>
      <div className="wrap-head-nav">
        <BtnClose onClose={toggleBurger} />
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
              to="/catalog?page=1&count=20"
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

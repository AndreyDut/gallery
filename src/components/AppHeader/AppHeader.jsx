import React, { useState } from "react";
import { WrapAppHeader } from "./appHeader.style";
import { NavLink } from "react-router-dom";
import BtnClose from "../BtnClose/BtnClose";

const AppHeader = () => {
  const [localState, setLocalState] = useState({ burgerOpen: false });

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
      <button className="wrap-head-burger" onClick={handlerActions("toggleBurger")}>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <div className="wrap-head-nav">
        <BtnClose onClose={handlerActions("toggleBurger")}/>
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
              to="/contacts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    </WrapAppHeader>
  );
};

export default AppHeader;

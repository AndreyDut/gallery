import styled, { css } from "styled-components";

const WrapAppHeader = styled.div`
  position: fixed;
  background-color: rgb(255, 255, 255);
  top: 0px;
  z-index: 101;
  left: 0;
  right: 0;
  height: 43px;
  box-shadow: 0 1px 4px 0 #ccc;

  button {
    border: none;
    background: transparent;
    outline: none;
    border-radius: 50%;
    padding: 2px;
    svg {
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
  }

  .wrap-head-burger {
    display: none;
    width: 36px;
    height: 36px;
    margin-left: 16px;
    margin-top: 4px;
    @media (max-width: 480px) {
      display: block;
    }
  }
  .btn-close {
    display: none;
  }

  .wrap-head-nav {
    height: 100%;
    .nav-list {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      & > li {
        display: inline-block;
        white-space: nowrap;
        a {
          position: relative;
          margin: 0 13px;
          text-decoration: none;
          color: #333;
          font-size: 18px;
          &:hover {
            color: rgb(151 105 92);
          }
          &.active {
            color: rgb(185, 145, 133);
          }
          .badge {
            position: absolute;
            top: -3px;
            right: -18px;
            background: rgb(185, 145, 133);
            color: rgb(255, 255, 255);
            border-radius: 50%;
            width: 18px;
            height: 18px;
            text-align: center;
            font-size: 13px;
          }
        }
      }
    }
    @media (max-width: 480px) {
      position: fixed;
      top: 0;
      left: -100%;
      width: 75vw;
      z-index: 102;
      transition: left 0.5s;
      background-color: rgb(255, 255, 255);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      .btn-close {
        display: none;
        display: block;
        position: absolute;
        right: 13px;
        top: 13px;
      }
      .nav-list {
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 24px;
        padding-top: 36px;
        & > li {
          padding: 13px 0;
        }
      }
      ${(props) =>
        props.burgerOpen &&
        css`
          left: 0;
          //   transform: translateX(0);
          bottom: 0px;
        `}
    }
  }
`;

export { WrapAppHeader };

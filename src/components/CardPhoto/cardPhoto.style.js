import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
50% {
  transform: scale(0);
  opacity: 0;
}
100% {
  width: 0;
  min-width: 0;
  transform: scale(0);
  opacity: 0;
  padding: 0;
  margin: 0;
}
`;

const WrapCardPhoto = styled.div`
  padding: 0 0 24px 24px;
  overflow: hidden;
  ${(props) =>
    props.animateRemove &&
    css`
      animation: ${rotate} forwards 0.7s ease-out 1;
    `}
  .photo {
    position: relative;
    width: 205px;
    box-shadow: 0px 4px 16px rgb(0 0 0 / 7%);
    border-radius: 10px;
    overflow: hidden;
    .favorite_btn {
      position: absolute;
      top: 8px;
      right: 8px;
      border: none;
      background: transparent;
      outline: none;
      cursor: pointer;
    }
    :hover {
      cursor: pointer;
      box-shadow: 0px 4px 16px rgb(0 0 0 / 20%);
    }
    .photo__preview {
      height: 150px;
      background: rgb(213 213 213 / 70%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
    }
    .photo__title {
      font-weight: 500;
      height: 30px;
      line-height: 25px;
      padding: 0 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .photo__remove {
      margin: 8px;
      background-color: rgb(255 73 73);
      border-radius: 2em;
      border: none;
      color: #fff;
      padding: 6px 8px;
      cursor: pointer;
    }
  }
`;

export { WrapCardPhoto };

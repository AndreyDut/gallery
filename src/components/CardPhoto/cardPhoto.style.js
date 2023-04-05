import styled from "styled-components";

const WrapCardPhoto = styled.div`
  padding: 0 0 24px 24px;
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

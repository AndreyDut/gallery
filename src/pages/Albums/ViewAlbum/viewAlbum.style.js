import styled from "styled-components";

const WrapViewAlbum = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 103;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .view-album {
    position: relative;
    background: #fff;
    border-radius: 10px;
    text-align: start;
    max-width: 200px;
    .btn-close {
      position: absolute;
      right: 8px;
      top: 8px;
      svg {
        width: 18px;
        height: 18px;
      }
    }
    h3, p {
      padding: 16px 16px 8px;
    }
    div {
      width: 100%;
      min-width: 200px;
      height: 200px;
      background: rgb(185 145 133 / 70%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
    }
  }
`;

export { WrapViewAlbum };

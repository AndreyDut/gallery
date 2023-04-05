import styled from "styled-components";

const WrapAlbums = styled.div`
  flex: 1;
  color: #424242;
  text-align: center;
  padding: 16px;
  h2 {
    padding: 20px 0 16px;
  }
  .albums-grid {
    .wrap-album {
      padding: 0 0 24px 24px;
      .album {
        width: 205px;
        box-shadow: 0px 4px 16px rgb(0 0 0 / 7%);
        border-radius: 10px;
        overflow: hidden;
        :hover {
          cursor: pointer;
          box-shadow: 0px 4px 16px rgb(0 0 0 / 20%);
        }
        .album__preview {
          height: 150px;
          background: rgb(185 145 133 / 70%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 32px;
        }
        .album__title {
          font-weight: 500;
          height: 55px;
        }
      }
    }
  }
`;

export { WrapAlbums };

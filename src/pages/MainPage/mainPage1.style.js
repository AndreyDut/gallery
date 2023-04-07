import styled from "styled-components";
import backgr_m_p from "../../assets/backgr_main_page.jpg";

const WrapMainPage = styled.div`
  flex: 1;
  .banner {
    position: relative;
    background-image: url(${backgr_m_p});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 200px 0;
    .dark {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    .banner-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: #fff;
      font-size: 20px;
      padding: 0 8px;
      .banner-sub-title {
        padding: 16px 0;
      }
      .link__catalog {
        display: inline-block;
        width: 280px;
        height: 50px;
        line-height: 47px;
        font-size: 20px;
        background-color: rgb(185, 145, 133);
        border-radius: 2em;
        color: #fff;
        text-decoration: none;
      }
      @media (max-width: 480px) {
        &,
        .link__catalog {
          font-size: 16px;
        }
      }
    }
  }
  .gallery-info {
    color: #424242;
    padding: 16px;
    max-width: 940px;
    margin: auto;
    .info-title {
      text-align: center;
      p {
        padding: 16px 0;
      }
    }
    .info-content {
      display: flex;
      max-height: 500px;
      @media (max-width: 480px) {
        max-height: 100%;
      }
      .content-items {
        .item {
          display: flex;
          position: relative;
          flex-direction: column;
          padding-left: 65px;
          margin-bottom: 30px;
          .num {
            background-color: #b99185;
            position: absolute;
            left: 0;
            font-size: 28px;
            width: 45px;
            height: 45px;
            text-align: center;
            line-height: 50px;
            color: #fff;
            border-radius: 5em 0 5em 5em;
          }
          p {
            padding-top: 8px;
          }
        }
      }

      .wrap-photo {
        padding-left: 40px;
        img {
          max-height: 100%;
        }
        @media (max-width: 840px) {
          display: none;
        }
      }
    }
  }
`;

export { WrapMainPage };

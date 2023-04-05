import styled from "styled-components";

const WrapAppFooter = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 10px 16px;
  box-shadow: rgb(204, 204, 204) 0px -1px 4px 0;
  h2 {
    padding-left: 13px;

  }
  .address {
    margin: auto;
    padding: 0 13px;
  }
  .phone {
    word-break: break-all;
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

  }
`;

export { WrapAppFooter };

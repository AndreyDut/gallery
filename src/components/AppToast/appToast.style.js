import styled from "styled-components";

const Toast = styled.div`
  position: fixed;
  z-index: 105;
  top: 24px;
  right: 24px;
  padding: 8px 16px;
  min-width: 100px;
  background: white;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export { Toast };

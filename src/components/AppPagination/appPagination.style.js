import styled from "styled-components";

const WrapAppPagination = styled.div`
  padding: 10px 0 20px;
  .pagination {
    display: flex;
    justify-content: center;
    padding-left: 0;
    list-style: none;

    .page-item {
      display: flex;
      .page-link {
        padding: 6px 12px;
        border: 1px solid #dee2e6;
        &:hover {
          z-index: 2;
          color: rgb(185, 145, 133);
          background-color: #e9ecef;
          border-color: #dee2e6;
          cursor: pointer;
        }
      }
      &:first-child .page-link {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      &:last-child .page-link {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
      &.disabled .page-link {
        color: #6c757d;
        pointer-events: none;
        background-color: #fff;
        border-color: #dee2e6;
        border-top-color: rgb(222, 226, 230);
        border-right-color: rgb(222, 226, 230);
        border-bottom-color: rgb(222, 226, 230);
        border-left-color: rgb(222, 226, 230);
      }
      &.active .page-link {
        z-index: 3;
        color: #fff;
        background-color: rgb(151 105 92);
        border-color: rgb(151 105 92);
        &:hover {
          background-color: rgb(151 105 92);
          border-color: rgb(151 105 92);
          color: #fff;
        }
      }
    }
  }
  .wrap-pagination-select {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
    p {
      line-height: 28px;
      padding-right: 10px;
    }
  }
  .pagination-select {
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    padding: 6px 12px;
  }
`;

export { WrapAppPagination };

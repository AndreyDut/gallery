import React, { useEffect } from "react";
import { WrapAppPagination } from "./appPagination.style";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {setPagination} from "../../store/slices/appSlice/appSlice"
import { useDispatch } from "react-redux";

const AppPagination = ({ itemsLength, itemsPerPage = 12, }) => {
  const pageCount = Math.ceil(itemsLength / itemsPerPage);
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const dispatch = useDispatch();


  const onPageChange = (e) => {
    let page = e.selected
    let start = (page * itemsPerPage) % itemsLength;
    const range = {
      start,
      end: start + itemsPerPage,
    };
    itemsLength && dispatch(setPagination(range))
    navigate(`?page=${++e.selected}`);
  };

  if(!itemsLength) return null;

  return (
    <WrapAppPagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onPageChange}
        initialPage={(search.get("page") || 1) - 1}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </WrapAppPagination>
  );
};

export default React.memo(AppPagination);

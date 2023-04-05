import React, { useEffect, useState } from "react";
import { WrapAppPagination } from "./appPagination.style";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { setPagination } from "../../store/slices/appSlice/appSlice";
import { useDispatch, useSelector } from "react-redux";

const AppPagination = ({ itemsLength, itemsPerPage = 15 }) => {
  const page = useSelector((state) => +state.app.pagination.page);
  const [search, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(+search.get("count") || itemsPerPage);
  let pageCount = Math.ceil(itemsLength / count);


  const onPageChange = (e) => {
    let page = e.selected;
    page = page >= pageCount ? pageCount - 1 : page;
    let newCount = e.count || count;
    let start = (page * newCount) % itemsLength;
    const range = {
      start,
      end: start + newCount,
      page: page + 1,
    };
    console.log(range)
    itemsLength && dispatch(setPagination(range));
  };

  const onCountChange = (e) => {
    let count = +e.target.value;
    pageCount = Math.ceil(itemsLength / count);
    setCount(count);
    onPageChange({ selected: page - 1, count });
  };

  useEffect(() => {
    setSearchParams({ page, count });
    window.scrollTo(0,0);
  }, [setSearchParams, page, count]);

  if (!itemsLength) return null;

  return (
    <WrapAppPagination>
      <div className="wrap-pagination-select">
        <p>Показывать на странице:</p>
        <select
          className="pagination-select"
          value={count}
          onChange={onCountChange}
        >
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
        </select>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onPageChange}
        pageRangeDisplayed={2}
        forcePage={page - 1}
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

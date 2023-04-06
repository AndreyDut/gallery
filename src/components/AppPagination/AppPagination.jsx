import React, { useCallback, useEffect, useMemo, useState } from "react";
import { WrapAppPagination } from "./appPagination.style";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { setPagination } from "../../store/slices/appSlice/appSlice";
import { useDispatch, useSelector } from "react-redux";

const AppPagination = ({ itemsLength, itemsPerPage = 20 }) => {
  const page = useSelector((state) => +state.app.pagination.page);
  const [search] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount] = useState(+search.get("count") || itemsPerPage);
  let pageCount = useMemo(
    () => Math.ceil(itemsLength / count),
    [itemsLength, count]
  );

  const onPageChange = useCallback(
    (currentPage, currentCount) => {
      let page = currentPage;
      page = page >= pageCount ? pageCount - 1 : page;
      let start = (page * currentCount) % itemsLength;
      const range = {
        start,
        end: start + currentCount,
        page: page + 1,
      };
      count !== currentCount && setCount(currentCount || count);
      itemsLength && dispatch(setPagination(range));
    },
    [dispatch, itemsLength, count, pageCount]
  );

  const handlerNavPage = (e) => {
    window.scrollTo(0, 0);
    navigate(`?page=${+e.selected + 1}&count=${count}`);
  };

  const onCountChange = (e) => {
    let count = +e.target.value;
    pageCount = Math.ceil(itemsLength / count);
    window.scrollTo(0, 0);
    navigate(`?page=${page >= pageCount ? pageCount : page}&count=${count}`);
  };

  useEffect(() => {
    let sPage = +search.get("page"),
      newPage = sPage > pageCount ? pageCount : page;
    if ((!sPage || !+search.get("count") || sPage > pageCount) && pageCount) {
      navigate(`?page=${newPage}&count=${count}`);
    }
  }, [navigate, page, count, search, pageCount]);

  useEffect(() => {
    onPageChange((+search.get("page") || 1) - 1, +search.get("count"));
  }, [location, onPageChange, search]);

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
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
        </select>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlerNavPage}
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

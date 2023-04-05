import React, { useEffect } from "react";
import { WrapLoader } from "./appLoader.style";
import { useSelector, useDispatch } from "react-redux";
import { setAppState } from "../../store/slices/appSlice/appSlice";

const AppLoader = () => {
  const loader = useSelector((state) => state.app.loader);
  const dispatch = useDispatch();
  let timeoutId = React.useRef();

  useEffect(() => {
    if (loader) {
      timeoutId.current = setTimeout(() => {
        dispatch(setAppState({ loader: false }));
      }, 15000);
    } else {
      timeoutId.current = clearTimeout(timeoutId.current);
    }
    return () => {
      timeoutId.current = clearTimeout(timeoutId.current);
    };
  }, [loader, dispatch]);

  if (!loader) return null;

  return (
    <WrapLoader>
      <div className="loader" />
    </WrapLoader>
  );
};

export default AppLoader;

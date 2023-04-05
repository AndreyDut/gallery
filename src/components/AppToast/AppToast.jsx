import React, { useEffect } from "react";
import { Toast } from "./appToast.style";
import { useSelector, useDispatch } from "react-redux";
import { resetAppState } from "../../store/slices/appSlice/appSlice";

export default function AppToast() {
  const toast = useSelector((state) => state.app.toast);
  const dispatch = useDispatch();
  let timeoutId = React.useRef();

  useEffect(() => {
    if (toast.trim()) {
      timeoutId.current = setTimeout(() => {
        dispatch(resetAppState("toast"));
      }, 2000);
    }
    return () => {
      timeoutId.current = clearTimeout(timeoutId.current);
    };
  }, [toast]);

  if (!toast.trim()) return null;

  return (
    <Toast>
      <p>{toast}</p>
    </Toast>
  );
}

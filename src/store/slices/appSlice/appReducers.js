import { initialStateApp } from "./appSlice";

const reducers = {
  setAppState(state, { payload }) {
    return { ...state, ...payload };
  },

  setPagination(state, { payload }) {
    let { start, end, page } = state.pagination;
    let { start: newStart, end: newEnd, page: newPage } = payload;
    if (start !== newStart || end !== newEnd || page !== newPage) {
      state.pagination = { ...state.pagination, ...payload };
    }
  },

  resetAppState(state, { payload }) {
    switch (payload) {
      case "selectAlbum":
        state.selectAlbum = null;
        break;
      case "toast":
        state.toast = initialStateApp.toast;
        break;
      default:
        return initialStateApp;
    }
  },
};

export default reducers;

import { createSlice } from "@reduxjs/toolkit";
import reducers from "./appReducers";
import extraReducers from "./appExtraReducers";

export const initialStateApp = {
  albums: [],
  photos: [],
  favorites: [],
  favoritesInCatalog: false,
  selectAlbum: null,
  loader: false,
  toast: "",
  pagination: {
    start: 0,
    end: 20,
    page: +new URLSearchParams(document.location.search).get("page") || 1,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: initialStateApp,
  reducers,
  extraReducers,
});

const appReducer = appSlice.reducer;

export const { setAppState, resetAppState, setPagination } = appSlice.actions;

export default appReducer;

import {createSlice} from '@reduxjs/toolkit';
import reducers from './appReducers';
import extraReducers from './appExtraReducers';

export const initialStateApp = {
  albums: [],
  selectAlbum: null,
  loader: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialStateApp,
  reducers,
  extraReducers,
})

const appReducer = appSlice.reducer;

export const {setAppState, resetAppState} = appSlice.actions;

export default appReducer;
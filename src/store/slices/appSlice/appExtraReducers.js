import { createAsyncThunk } from "@reduxjs/toolkit";
import { readData } from "../../../services/CRUD_FireBase";

export const getAlbums = createAsyncThunk("app/getAlbums", async () => {
  let albums = await readData("albums/all");
  return albums.data;
});

export const getAllPhotos = createAsyncThunk("app/getAllPhotos", async () => {
  let photos = await readData("photos/all");
  return photos.data;
});

export const getFavoritesPhotos = createAsyncThunk("app/getFavoritesPhotos", async () => {
  let photos = await readData("photos/favorites");
  return photos.data;
});

export const getAlbumById = createAsyncThunk(
  "app/getAlbumById",
  async (id, thunkApi) => {
    let albums = thunkApi.getState().app.albums;
    return albums.find((elem) => elem.id === +id);
  }
);

const extraReducers = (builder) => {
  builder.addCase(getAlbums.pending, (state, { payload }) => {
    state.loader = true;
  });
  builder.addCase(getAlbums.fulfilled, (state, { payload }) => {
    state.albums = payload;
    state.loader = false;
  });
  builder.addCase(getAlbums.rejected, (state, { payload }) => {
    state.loader = false;
  });
  builder.addCase(getAllPhotos.pending, (state, { payload }) => {
    state.loader = true;
  });
  builder.addCase(getAllPhotos.fulfilled, (state, { payload }) => {
    state.photos = payload;
    state.loader = false;
  });
  builder.addCase(getAllPhotos.rejected, (state, { payload }) => {
    state.loader = false;
  });
  builder.addCase(getFavoritesPhotos.pending, (state, { payload }) => {
    state.loader = true;
  });
  builder.addCase(getFavoritesPhotos.fulfilled, (state, { payload }) => {
    state.favorites = payload;
    state.loader = false;
  });
  builder.addCase(getFavoritesPhotos.rejected, (state, { payload }) => {
    state.loader = false;
  });
  builder.addCase(getAlbumById.fulfilled, (state, { payload }) => {
    state.selectAlbum = payload;
  });
};

export default extraReducers;

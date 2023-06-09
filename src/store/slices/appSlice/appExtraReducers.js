import { createAsyncThunk } from "@reduxjs/toolkit";
import { readData, updateData } from "../../../services/CRUD_FireBase";
import { arrayUnion, arrayRemove } from "firebase/firestore";

export const getAlbums = createAsyncThunk("app/getAlbums", async () => {
  let albums = await readData("albums/all");
  return albums.data;
});

export const getAllPhotos = createAsyncThunk("app/getAllPhotos", async () => {
  let photos = await readData("photos/all");
  return photos.data;
});

export const getFavoritesPhotos = createAsyncThunk(
  "app/getFavoritesPhotos",
  async () => {
    let photos = await readData("photos/favorites");
    return photos.data;
  }
);

export const addFavoritePhoto = createAsyncThunk(
  "app/addFavoritePhoto",
  async (photo, thunkAPI) => {
    await updateData("photos/favorites", { data: arrayUnion(photo) });
    let favorites = thunkAPI.getState().app.favorites.slice();
    favorites.push(photo);
    return favorites;
  }
);

export const removeFavoritePhoto = createAsyncThunk(
  "app/removeFavoritePhoto",
  async ({photo, animation}, thunkAPI) => {
    let favorites = thunkAPI.getState().app.favorites.slice();
    if(animation) {
      await updateData("photos/favorites", { data: arrayRemove(photo) });
      favorites = favorites.map((elem) => elem.id === photo.id ? {...elem, remove: true} : elem);
    } else {
      favorites = favorites.filter((elem) => elem.id !== photo.id);
    }  
    return {favorites, remove: !animation};
  }
);

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

  });
  builder.addCase(getFavoritesPhotos.fulfilled, (state, { payload }) => {
    state.favorites = payload;

  });
  builder.addCase(getFavoritesPhotos.rejected, (state, { payload }) => {

  });
  builder.addCase(getAlbumById.fulfilled, (state, { payload }) => {
    state.selectAlbum = payload;
  });

  builder.addCase(addFavoritePhoto.pending, (state, { payload }) => {
    state.loader = true;
  });
  builder.addCase(addFavoritePhoto.fulfilled, (state, { payload }) => {
    state.favorites = payload;
    state.toast = "Добавлено в избранное";
    state.loader = false;
  });
  builder.addCase(addFavoritePhoto.rejected, (state, action) => {
    state.loader = false;
  });

  builder.addCase(removeFavoritePhoto.pending, (state, action) => {
    state.loader = action.meta.arg.animation;
  });
  builder.addCase(removeFavoritePhoto.fulfilled, (state, { payload }) => {
    if(payload.remove) state.toast = "Удалено из избранного";
    state.favorites = payload.favorites;
    state.loader = false;
  });
  builder.addCase(removeFavoritePhoto.rejected, (state, { payload }) => {
    state.loader = false;
  });
};

export default extraReducers;

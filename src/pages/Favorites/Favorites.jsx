import React, { useEffect } from "react";
import { WrapFavorites } from "./favorites.style";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../services/CRUD_FireBase";
import { arrayRemove, arrayUnion } from "firebase/firestore";
import {
  addFavoritePhoto,
  getAllPhotos,
  removeFavoritePhoto,
} from "../../store/slices/appSlice/appExtraReducers";
import { favoritesBGIcon, favoritesIcon } from "../../assets/svg_icons";
import { AppGrid } from "../../assets/theme";

const Favorites = () => {
  const favorites = useSelector((state) => state.app.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerActions = (key, data) => async () => {
    switch (key) {
      case "removeFavorites":
        dispatch(removeFavoritePhoto(data));
        break;

      default:
        break;
    }
  };

  return (
    <WrapFavorites>
      <h2>Избранные картины</h2>
      <p>Список ваших избранных картин</p>
      <AppGrid className="photos-grid">
        {favorites.map((photo) => (
          <div className="wrap-photo" key={photo.id} onClick={() => {}}>
            <div className="photo">
              <div className="photo__preview">
                <img src={photo.thumbnailUrl} alt="thumbnail photo" />
              </div>
              <p className="photo__title">{photo.title}</p>
              <button
                className="photo__remove"
                onClick={handlerActions("removeFavorites", photo)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </AppGrid>
    </WrapFavorites>
  );
};

export default Favorites;

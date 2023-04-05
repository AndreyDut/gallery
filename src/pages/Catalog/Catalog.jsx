import React, { useEffect } from "react";
import { WrapCatalog } from "./catalog.style";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../services/CRUD_FireBase";
import { arrayRemove, arrayUnion } from "firebase/firestore";
import { addFavoritePhoto, getAllPhotos, removeFavoritePhoto } from "../../store/slices/appSlice/appExtraReducers";
import { favoritesBGIcon, favoritesIcon } from "../../assets/svg_icons";
import { AppGrid } from "../../assets/theme";

const Catalog = () => {
  const photos = useSelector((state) => state.app.photos);
  const favorites = useSelector((state) => state.app.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPhotos());
  }, []);

  const handlerActions = (key, data) => async () => {
    switch (key) {
      case "addFavorites":
          dispatch(addFavoritePhoto(data));
        break;
      case "removeFavorites":
        dispatch(removeFavoritePhoto(data));
        break;

      default:
        break;
    }
  };

  // console.log(favorites);
  // console.log(photos);

  return (
    <WrapCatalog>
      <h2>Каталог работ</h2>
      <p>В каталоге представлены работы художников</p>

      <AppGrid className="photos-grid">
        {photos.map((photo) => (
          <div className="wrap-photo" key={photo.id} onClick={() => {}}>
            <div className="photo">
              {favorites.find((elem) => elem.id === photo.id) ? (
                <button
                  className="favorite_btn"
                  onClick={handlerActions("removeFavorites", photo)}
                >
                  {favoritesBGIcon}
                </button>
              ) : (
                <button
                  className="favorite_btn"
                  onClick={handlerActions("addFavorites", photo)}
                >
                  {favoritesIcon}
                </button>
              )}
              <div className="photo__preview">
                <img src={photo.thumbnailUrl} alt="thumbnail photo" />
              </div>
              <p className="photo__title">{photo.title}</p>
            </div>
          </div>
        ))}
      </AppGrid>
    </WrapCatalog>
  );
};

export default Catalog;

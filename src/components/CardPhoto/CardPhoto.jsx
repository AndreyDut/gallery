import React, { useEffect } from "react";
import { WrapCardPhoto } from "./cardPhoto.style";
import { favoritesBGIcon, favoritesIcon } from "../../assets/svg_icons";
import { useDispatch } from "react-redux";
import { addFavoritePhoto, removeFavoritePhoto } from "../../store/slices/appSlice/appExtraReducers";

const CardPhoto = ({ type, photo, favorite }) => {
  const dispatch = useDispatch();



  const handlerActions = (key, photo) => async () => {
    switch (key) {
      case "addFavorites":
        dispatch(addFavoritePhoto(photo));
        break;
      case "removeFavorites":
        // setAnimateRemove(true)
        dispatch(removeFavoritePhoto({photo, animation: type === "favorites" && !photo.remove}));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if(photo.remove) {
      setTimeout(() => {
        dispatch(removeFavoritePhoto({photo, animation: type === "favorites" && !photo.remove}));
      }, 700);
    }
  }, [photo, dispatch, type])

  return (
    <WrapCardPhoto className="wrap-photo" onClick={handlerActions("selectPhoto", photo)} animateRemove={photo.remove}>
        <div className="photo">
          {type === "catalog" ? (
             favorite ? (
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
            )
          ) : null}
          <div className="photo__preview">
            <img src={photo.thumbnailUrl} alt="thumbnail" />
          </div>
          <p className="photo__title">{photo.title}</p>
          {type === "favorites" ? (
            <button
              className="photo__remove"
              onClick={handlerActions("removeFavorites", photo)}
            >
              Удалить
            </button>
          ) : null}
        </div>
    </WrapCardPhoto>
  );
};

export default React.memo(CardPhoto);

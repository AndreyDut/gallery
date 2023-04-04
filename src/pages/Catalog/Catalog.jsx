import React, { useEffect } from "react";
import { WrapCatalog } from "./catalog.style";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../services/CRUD_FireBase";
import { arrayUnion } from "firebase/firestore";
import { getAllPhotos } from "../../store/slices/appSlice/appExtraReducers";

const Catalog = () => {
  const photos = useSelector((state) => state.app.photos);
  const favorites = useSelector((state) => state.app.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPhotos());
  }, []);

  console.log(favorites);
  console.log(photos);


  return (
    <WrapCatalog>
      <h2>Каталог работ</h2>
      <p>В каталоге представлены работы художников</p>

      <div className="photos-grid">
        {photos.map((photo) => (
          <div className="wrap-photo" key={photo.id} onClick={() => {}}>
            <div className="photo">
              <div className="photo__preview">
                <img src={photo.thumbnailUrl} alt="thumbnail photo" />
                {favorites.find(elem => elem.id === photo.id) ? <p>{photo.id}</p> : null}
              </div>
              <p className="photo__title">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </WrapCatalog>
  );
};

export default Catalog;

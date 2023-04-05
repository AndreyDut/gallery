import React, { useEffect } from "react";
import { WrapCatalog } from "./catalog.style";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos } from "../../store/slices/appSlice/appExtraReducers";
import { AppGrid } from "../../assets/theme";
import CardPhoto from "../../components/CardPhoto/CardPhoto";
import AppPagination from "../../components/AppPagination/AppPagination";

const Catalog = () => {
  const photos = useSelector((state) => state.app.photos);
  const favorites = useSelector((state) => state.app.favorites);
  const { start, end } = useSelector((state) => state.app.pagination);
  const dispatch = useDispatch();
  const currentItems = photos.slice(start, end);

  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch]);


  return (
    <WrapCatalog>
      <h2>Каталог работ</h2>
      <p>В каталоге представлены работы художников</p>
      <AppGrid className="photos-grid">
        {currentItems.map((photo) => (
          <CardPhoto
            type="catalog"
            photo={photo}
            key={photo.id}
            favorite={favorites.find((elem) => elem.id === photo.id)}
          />
        ))}
      </AppGrid>
      <AppPagination itemsLength={photos.length} />
    </WrapCatalog>
  );
};

export default Catalog;

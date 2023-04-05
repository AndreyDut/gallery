import React from "react";
import { WrapFavorites } from "./favorites.style";
import { useSelector } from "react-redux";

import { AppGrid } from "../../assets/theme";
import CardPhoto from "./../../components/CardPhoto/CardPhoto";
import AppPagination from "../../components/AppPagination/AppPagination";

const Favorites = () => {
  const favorites = useSelector((state) => state.app.favorites);
  const { start, end } = useSelector((state) => state.app.pagination);
  const currentItems = favorites.slice(start, end);
  return (
    <WrapFavorites>
      <h2>Избранные картины</h2>
      <p>Список ваших избранных картин</p>
      <AppGrid className="photos-grid">
        {currentItems.map((photo) => (
          <CardPhoto type="favorites" photo={photo} key={photo.id} />
        ))}
      </AppGrid>
      <AppPagination itemsLength={favorites.length} />
    </WrapFavorites>
  );
};

export default Favorites;

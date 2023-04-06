import React from "react";
import { WrapFavorites } from "./favorites.style";
import { useSelector } from "react-redux";
import { AppGrid } from "../../assets/theme";
import CardPhoto from "./../../components/CardPhoto/CardPhoto";

const Favorites = () => {
  const favorites = useSelector((state) => state.app.favorites);

  return (
    <WrapFavorites>
      <h2>Избранные картины</h2>
      <p>Список ваших избранных картин</p>
      {favorites.length ? <AppGrid className="photos-grid">
        {favorites.map((photo) => (
          <CardPhoto type="favorites" photo={photo} key={photo.id} />
        ))}
      </AppGrid> : <p>У вас нет избранных картин</p> }
    </WrapFavorites>
  );
};

export default Favorites;

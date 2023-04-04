import React, { useEffect } from "react";
import { WrapAlbums } from "./albums.style";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAlbums } from "../../store/slices/appSlice/appExtraReducers";

const Albums = () => {

  const albums = useSelector(state => state.app.albums);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const navToAlbum = (id) => () => navigate(`${id}`);

  useEffect(() => {
    dispatch(getAlbums());
  }, [])


  return (
    <WrapAlbums>
      <h2>Альбомы работ</h2>
      <p>В альбомах представлены работы художников</p>

      <div className="albums-grid">
        {albums.map((album) => (
          <div className="wrap-album" key={album.id} onClick={navToAlbum(album.id)}>
            <div className="album">
              <div className="album__preview">
                {album.id}
              </div>
              <p className="album__title">{album.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Outlet/>
    </WrapAlbums>
  );
};

export default React.memo(Albums);

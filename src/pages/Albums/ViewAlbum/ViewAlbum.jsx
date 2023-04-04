import React, { useEffect } from "react";
import { WrapViewAlbum } from "./viewAlbum.style";
import { useNavigate, useParams } from "react-router-dom";
import BtnClose from "../../../components/BtnClose/BtnClose";
import { getAlbumById } from "../../../store/slices/appSlice/appExtraReducers";
import { useDispatch, useSelector } from "react-redux";
import { resetAppState } from "../../../store/slices/appSlice/appSlice";

const ViewAlbum = () => {
  const { albumId } = useParams();
  const albums = useSelector((state) => state.app.albums);
  const selectAlbum = useSelector((state) => state.app.selectAlbum);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeAlbum = () => {
    dispatch(resetAppState("selectAlbum"));
    navigate("/albums")
  }

  useEffect(() => {
    dispatch(getAlbumById(albumId));
  }, [albums, albumId]);

  return (
    <WrapViewAlbum>
      {selectAlbum ? (
        <div className="view-album">
          <BtnClose onClose={closeAlbum} />
          <h3>Альбом {albumId}</h3>
          <p>{selectAlbum.title}</p>
          <div>{albumId}</div>
        </div>
      ) : null}
    </WrapViewAlbum>
  );
};

export default ViewAlbum;

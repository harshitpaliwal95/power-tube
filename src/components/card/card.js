import { useState } from "react";
import { useVideoGlobal, useAuth, usePlaylist } from "../../context";
import { findItem } from "../../utils/findItem";
import { Modal } from "../modal/modal";
import "./card.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LikeVideoApi, WatchLaterApi } from "../../axiosAPI's";

export const Card = ({ video }) => {
  const { setPlaylist } = usePlaylist();

  const { id } = useParams();
  const {
    auth: { token },
  } = useAuth();
  const header = { authorization: token };

  const { title, anime, _id } = video;
  const { state:{likeVideo,watchLater} } = useVideoGlobal();

  const [modal, setModal] = useState(false);
  const isVideoInLiked = findItem(likeVideo, _id);
  const isVideoInWatchLater = findItem(watchLater, _id);

  const likeApi = LikeVideoApi();
  const watchlaterApi = WatchLaterApi();
  const likedVideoHandler = (data) => {
    if (!isVideoInLiked) {
      likeApi.likeVideoPost(data);
    } else {
      likeApi.likeVideoDelete(data);
    }
  };

  const watchLaterHandler = (data) => {
    if (!isVideoInWatchLater) {
      watchlaterApi.watchLaterPost(data);
    } else {
      watchlaterApi.watchLaterDelete(data);
    }
  };

  const deleteFromPlaylist = async (playlistId, videoId) => {
    const deleteLink = `/api/user/playlists/${playlistId}/${videoId}`;
    try {
      const response = await axios.delete(deleteLink, { headers: header });
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-component">
      {modal && <Modal setModal={setModal} video={video} />}
      <div className="card-comp-img">
        <img
          className="card-top-img"
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
          alt="loading"
        />
      </div>
      <div className="card-comp-contant">
        <p className="text-lg">{title}</p>
        <p className="gray-text">Category {anime}</p>
      </div>
      <div className="card-btn-footer">
        <div className="card-icon-btn-right">
          <button onClick={() => likedVideoHandler(video)}>
            <i
              className={`bi bi-hand-thumbs-up${
                isVideoInLiked ? "-fill" : ""
              } btn-icon`}
            ></i>
          </button>
          <button onClick={() => watchLaterHandler(video)}>
            <i
              className={`bi bi-bookmarks${
                isVideoInWatchLater ? "-fill" : ""
              } btn-icon`}
            ></i>
          </button>
          {id ? (
            <button onClick={() => deleteFromPlaylist(id, video._id)}>
              <i className={`bi bi-trash btn-icon`}></i>
            </button>
          ) : (
            <button onClick={() => setModal(true)}>
              <i className={`bi bi-plus-circle-fill btn-icon`}></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

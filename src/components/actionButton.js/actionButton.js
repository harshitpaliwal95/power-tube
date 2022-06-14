import { useAuth, usePlaylist, useVideoGlobal } from "../../context";
import { findItem } from "../../utils/findItem";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { ClickHandler } from "../../utils/clickHandler";
import { Modal } from "../modal/modal";
import { useState } from "react";
import { HistoryApi } from "../../service/history/history";
import { toast } from "react-toastify";

export const ActionButton = ({ playlistId, videoId, video }) => {
  const {
    state: { likeVideo, watchLater },
  } = useVideoGlobal();
  const { setPlaylist } = usePlaylist();

  const {
    auth: { token },
  } = useAuth();
  const header = { authorization: token };

  const [modal, setModal] = useState(false);

  const { id } = useParams();

  const isVideoInLiked = findItem(likeVideo, videoId);
  const isVideoInWatchLater = findItem(watchLater, videoId);

  const { likedVideoHandler, watchLaterHandler } = ClickHandler();

  const deleteFromPlaylist = async (playlistId, videoId) => {
    const deleteLink = `/api/user/playlists/${playlistId}/${videoId}`;
    try {
      const response = await axios.delete(deleteLink, { headers: header });
      setPlaylist(response.data.playlists);
    } catch (error) {
      toast.info("Something went wrong");
    }
  };

  const { deleteVideoFromHistory } = HistoryApi();

  let { pathname } = useLocation();

  return (
    <>
      {modal && <Modal setModal={setModal} video={video} />}
      <button onClick={() => likedVideoHandler(video, isVideoInLiked)}>
        <i
          className={`bi bi-hand-thumbs-up${
            isVideoInLiked ? "-fill" : ""
          } btn-icon`}
        ></i>
      </button>
      <button onClick={() => watchLaterHandler(video, isVideoInWatchLater)}>
        <i
          className={`bi bi-bookmarks${
            isVideoInWatchLater ? "-fill" : ""
          } btn-icon`}
        ></i>
      </button>

      {pathname !== "/history" && (
        <>
          {id && playlistId ? (
            <button onClick={() => deleteFromPlaylist(playlistId, videoId)}>
              <i className={`bi bi-trash btn-icon`}></i>
            </button>
          ) : (
            <button onClick={() => setModal(true)}>
              <i className={`bi bi-plus-circle-fill btn-icon`}></i>
            </button>
          )}
        </>
      )}
      {pathname === "/history" && (
        <button onClick={() => deleteVideoFromHistory(videoId)}>
          <i className={`bi bi-trash btn-icon`}></i>
        </button>
      )}
    </>
  );
};

import "./modal.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { usePlaylist } from "../../context";

export const Modal = ({ setModal, video }) => {
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const {
    auth: { token },
  } = useAuth();
  const { playlist, setPlaylist } = usePlaylist();
  const [title, setTitle] = useState("");

  const header = { authorization: token };

  const createPlaylistHandler = async () => {
    const data = {
      title: title,
      description: "this is my new playlist",
    };
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: data },
        {
          headers: header,
        }
      );
      setPlaylist(response.data.playlists);
      setCreatePlaylist(false);
    } catch (e) {
      console.log(e.message);
      toast.error("please Login first");
    }
  };

  const addVideoToPlaylist = async (video, id) => {
    const postLink = "/api/user/playlists/" + id;
    const sendVideo = { video: video };

    try {
      const response = await axios.post(postLink, sendVideo, {
        headers: header,
      });
      setPlaylist(response.data.playlists);
      console.log(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-layer">
      <ToastContainer />
      <div className="modal-box">
        <div className="modal-head">
          <span className="heading-lg">Add To Playlist</span>
          <button className="btn-icon" onClick={() => setModal(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="modal-contant">
          {playlist.length > 0 &&
            playlist.map((playlist) => (
              <label key={playlist._id}>
                <input
                  type="checkbox"
                  onChange={() => addVideoToPlaylist(video, playlist._id)}
                ></input>
                {playlist.title}
              </label>
            ))}

          {createPlaylist && (
            <div className="playlist-box">
              <input
                className="newplaylist-input"
                type="text"
                placeholder="create new playlist"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <button className="btn" onClick={() => createPlaylistHandler()}>
                Add
              </button>
            </div>
          )}
        </div>
        <div className="modal-btn-playlist">
          <button
            className="btn create-playlist-btn"
            onClick={() => setCreatePlaylist(true)}
          >
            <i className="bi bi-plus-lg"></i> Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

import "./modal.css";
import { useState } from "react";

export const Modal = ({ setModal }) => {
  const [createPlaylist, setCreatePlaylist] = useState(false);
  return (
    <div className="modal-layer">
      <div className="modal-box">
        <div className="modal-head">
          <span className="heading-lg">Add To Playlist</span>
          <button className="btn-icon" onClick={() => setModal(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="modal-contant">
          <label>
            <input type="checkbox"></input>
            My Playlist
          </label>
          <label>
            <input type="checkbox"></input>
            My Playlist Two
          </label>
          {createPlaylist && (
            <div className="playlist-box">
              <input
                className="newplaylist-input"
                type="text"
                placeholder="create new playlist"
              ></input>
              <button className="btn" onClick={() => setCreatePlaylist(false)}>
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

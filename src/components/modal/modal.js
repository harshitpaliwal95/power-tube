import "./modal.css";

export const Modal = ({ setModel }) => {
  return (
    <div className="modal-layer">
      <div className="modal-box">
        <div className="modal-head">
          <span className="heading-lg">Add To Playlist</span>
          <button className="btn-icon" onClick={() => setModel(false)}>
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
        </div>
        <div className="modal-btn-playlist">
          <button className="btn create-playlist-btn">
            <i className="bi bi-plus-lg"></i> Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

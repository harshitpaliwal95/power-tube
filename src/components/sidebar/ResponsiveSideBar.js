import { useNavigate } from "react-router-dom";
import { useVideoGlobal } from "../../context";
import "./sidebar.css";

export const ResponsiveSidebar = () => {
  const {
    state: { sideBar },
    dispatch,
  } = useVideoGlobal();
  const navigate = useNavigate();
  return (
    <aside className={`responsive-side-bar ${sideBar ? "" : "display-none"}`}>
      <div
        onClick={() => {
          navigate("/");
          dispatch({ type: "SIDE_BAR", payload: false });
        }}
      >
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-house"></i> Home
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/explore");
          dispatch({ type: "SIDE_BAR", payload: false });
        }}
      >
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-compass"></i> Explore
        </div>
      </div>

      <div
        onClick={() => {
          navigate("/playlist");
          dispatch({ type: "SIDE_BAR", payload: false });
        }}
      >
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-collection-play"></i> Playlist
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/liked");
          dispatch({ type: "SIDE_BAR", payload: false });
        }}
      >
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-hand-thumbs-up"></i> Liked Video
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/watchlater");
          dispatch({ type: "SIDE_BAR", payload: false });
        }}
      >
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-bookmarks"></i> Watch Later
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/history");
          dispatch({ type: "SIDE_BAR", payload: false });
        }}
      >
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-clock-history"></i> History
        </div>
      </div>
    </aside>
  );
};

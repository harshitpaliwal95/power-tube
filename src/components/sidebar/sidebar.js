import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <aside className={`side-bar`}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <div
          className={`sidebar-title text-lg sidebar-btn ${
            pathname === "/" && "bg-active"
          }`}
        >
          <i className="bi bi-house"></i> Home
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/explore");
        }}
      >
        <div
          className={`sidebar-title text-lg sidebar-btn ${
            pathname === "/explore" && "bg-active"
          }`}
        >
          <i className="bi bi-compass"></i> Explore
        </div>
      </div>

      <div
        onClick={() => {
          navigate("/playlist");
        }}
      >
        <div
          className={`sidebar-title text-lg sidebar-btn ${
            pathname === "/playlist" && "bg-active"
          }`}
        >
          <i className="bi bi-collection-play"></i> Playlist
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/liked");
        }}
      >
        <div
          className={`sidebar-title text-lg sidebar-btn ${
            pathname === "/liked" && "bg-active"
          }`}
        >
          <i className="bi bi-hand-thumbs-up"></i> Liked Video
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/watchlater");
        }}
      >
        <div
          className={`sidebar-title text-lg sidebar-btn ${
            pathname === "/watchlater" && "bg-active"
          }`}
        >
          <i className="bi bi-bookmarks"></i> Watch Later
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/history");
        }}
      >
        <div
          className={`sidebar-title text-lg sidebar-btn ${
            pathname === "/history" && "bg-active"
          }`}
        >
          <i className="bi bi-clock-history"></i> History
        </div>
      </div>
    </aside>
  );
};

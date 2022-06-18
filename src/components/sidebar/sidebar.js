import { Link } from "react-router-dom";
import { useVideoGlobal } from "../../context";
import "./sidebar.css";

export const Sidebar = () => {
  const {
    state: { sideBar },
  } = useVideoGlobal();
  return (
    <aside className={`side-bar ${sideBar ? "" : "display-none"}`}>
      <Link to="/">
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-house"></i> Home
        </div>
      </Link>
      <Link to="/explore">
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-compass"></i> Explore
        </div>
      </Link>

      <Link to="/playlist">
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-collection-play"></i> Playlist
        </div>
      </Link>
      <Link to="/liked">
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-hand-thumbs-up"></i> Liked Video
        </div>
      </Link>
      <Link to="/watchlater">
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-bookmarks"></i> Watch Later
        </div>
      </Link>
      <Link to="/history">
        <div className="sidebar-title text-lg sidebar-btn">
          <i className="bi bi-clock-history"></i> History
        </div>
      </Link>
    </aside>
  );
};

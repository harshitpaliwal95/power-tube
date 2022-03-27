import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="side-bar">
      <div className="sidebar-title text-lg sidebar-btn">
        <i class="bi bi-house"></i> Home
      </div>
      <div className="sidebar-title text-lg sidebar-btn">
        <i class="bi bi-compass"></i> Explore
      </div>
      <div className="sidebar-title text-lg sidebar-btn">
        <i class="bi bi-collection-play"></i> Playlist
      </div>
      <div className="sidebar-title text-lg sidebar-btn">
        <i class="bi bi-hand-thumbs-up"></i> Liked Video
      </div>
      <div className="sidebar-title text-lg sidebar-btn">
        <i class="bi bi-bookmarks"></i> Watch Later
      </div>
    </aside>
  );
};

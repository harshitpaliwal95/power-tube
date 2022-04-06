import React from "react";
import { useNavigate } from "react-router-dom";

import "./newPlaylist.css";
export const NewPlaylist = () => {
  const navigate = useNavigate();
  return (
    <div
      className="card-component create-playlist"
      onClick={() => navigate("/demo")}
    >
      <p className="text-lg">My Playlist</p>
    </div>
  );
};

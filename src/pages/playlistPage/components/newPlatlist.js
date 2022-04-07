import React from "react";
import { useNavigate } from "react-router-dom";

import "./newPlaylist.css";
export const NewPlaylist = ({ playlist }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-component create-playlist"
      onClick={() => navigate("/demo")}
    >
      <img
        className="card-top-img"
        src="https://i.ytimg.com/vi/CuvRbljK7Ts/hqdefault.jpg"
        alt="loading"
      />
      <div className="heading-lg">
        <i className="bi bi-list-ul"></i>{" "}
        <p className="text-lg">{playlist.title}</p>
        <i className="bi bi-trash trash-icon"></i>
      </div>
    </div>
  );
};

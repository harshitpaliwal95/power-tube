import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, usePlaylist } from "../../../context";

import "./newPlaylist.css";
export const NewPlaylist = ({ playlist }) => {
  const {
    auth: { token },
  } = useAuth();

  const { setPlaylist } = usePlaylist();

  const deletePlaylist = async (id) => {
    const header = { authorization: token };

    const deleteLink = "/api/user/playlists/" + id;
    try {
      const response = await axios.delete(deleteLink, { headers: header });
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="card-component create-playlist">
      <img
        className="card-top-img"
        src="https://i.ytimg.com/vi/EK5Ua8qOLuo/hqdefault.jpg"
        alt="loading"
        onClick={() => navigate(`/playlist/${playlist._id}`)}
      />
      <div className="heading-lg">
        <i className="bi bi-list-ul"></i>{" "}
        <p className="text-lg">{playlist.title}</p>
        <i
          className="bi bi-trash trash-icon"
          onClick={() => deletePlaylist(playlist._id)}
        ></i>
      </div>
    </div>
  );
};

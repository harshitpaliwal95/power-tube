import { useState } from "react";
import "./card.css";

export const Card = ({ video }) => {
  const { title, anime, _id } = video;

  return (
    <div className="card-component">
      <div className="card-comp-img">
        <img
          className="card-top-img"
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
          alt="loading"
        />
      </div>
      <div className="card-comp-contant">
        <p className="text-lg">{title}</p>
        <p className="gray-text">Category {anime}</p>
      </div>
      <div className="card-btn-footer">
        <div className="card-icon-btn-right">
          <button>
            <i className={`bi bi-hand-thumbs-up card-icon`}></i>
          </button>
          <button>
            <i className={`bi bi-bookmarks card-icon`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

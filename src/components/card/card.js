import "./card.css";
import { useNavigate, useParams } from "react-router-dom";
import { ActionButton } from "../actionButton.js/actionButton";
import { useRef, useState } from "react";

export const Card = ({ video }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { title, anime, _id } = video;
  const [playVideo, setPlayVideo] = useState(false);
  const timerID = useRef(null);

  const playVideoFun = () => {
    if (timerID.current) {
      clearTimeout(timerID.current);
    }
    timerID.current = setTimeout(() => {
      setPlayVideo(true);
    }, 1000);
  };

  const stopVideoFun = () => {
    setPlayVideo(false);
    clearTimeout(timerID.current);
  };

  return (
    <div className="card-component">
      <div
        className="card-comp-img"
        onClick={() => navigate(`/video/${_id}`)}
        onMouseEnter={() => playVideoFun()}
        onMouseLeave={() => stopVideoFun()}
      >
        {playVideo ? (
          <iframe
            className="iframe"
            src={`https://www.youtube-nocookie.com/embed/${_id}?autoplay=1&mute=1&modestbranding=1&fs=0&showinfo=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <img
            className={`card-top-img`}
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt="loading"
          />
        )}
      </div>
      <div
        className="card-comp-contant"
        onClick={() => navigate(`/video/${_id}`)}
      >
        <p className="text-lg">{title}</p>
        <p className="gray-text">Category {anime}</p>
      </div>
      <div className="card-btn-footer">
        <div className="card-icon-btn-right">
          <ActionButton playlistId={id} videoId={video._id} video={video} />
        </div>
      </div>
    </div>
  );
};

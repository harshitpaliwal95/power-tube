import "./card.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ActionButton } from "../actionButton.js/actionButton";

export const Card = ({ video }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { title, anime, _id } = video;

  return (
    <div className="card-component">
      <div className="card-comp-img">
        <img
          className="card-top-img"
          onClick={() => navigate(`video/${_id}`)}
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
          <ActionButton playlistId={id} videoId={video._id} video={video} />
        </div>
      </div>
    </div>
  );
};

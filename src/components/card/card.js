import "./card.css";

export const Card = ({ video }) => {
  const { title, anime, _id } = video;
  const videoLink = `https://i.ytimg.com/vi/${_id}/hqdefault.jpg`;
  return (
    <div className="card-component">
      <div className="card-comp-img">
        <img className="card-top-img" src={videoLink} alt="loading" />
      </div>
      <div className="card-comp-contant">
        <p className="text-lg">{title}</p>
        <p className="gray-text">Category {anime}</p>
      </div>
      <div className="card-btn-footer">
        <div className="card-icon-btn-right">
          <button>
            <i className="bi bi-hand-thumbs-up-fill card-icon"></i>
          </button>
          <button>
            <i className="bi bi-bookmarks-fill card-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

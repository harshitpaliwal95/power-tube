import "./card.css";

export const Card = () => {
  return (
    <div className="card-component">
      <div className="card-comp-img">
        <img
          className="card-top-img"
          src="https://i.ytimg.com/vi/d1N-W2BLlRs/hq720.jpg"
          alt="loading"
        />
      </div>
      <div className="card-comp-contant">
        <p className="text-lg">[ONE PIECE AMV] - SURVIVOR</p>
        <p className="gray-text">Category One piece</p>
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

import { ACTION } from "../../action/action";
import { useVideoGlobal } from "../../context/globalContext";
import { findItem } from "../../utils/findItem";
import "./card.css";

export const Card = ({ video }) => {
  const { title, anime, _id } = video;
  const {
    globalState: { likeVideo, watchLater },
    globalDispatch,
  } = useVideoGlobal();

  const isVideoInLiked = findItem(likeVideo, _id);
  const isVideoInWatchLater = findItem(watchLater, _id);

  const likedVideoHandler = (data) => {
    if (isVideoInLiked) {
      globalDispatch({
        type: ACTION.REMOVE_FORM_LIKED_VIDEO,
        payload: data._id,
      });
    } else {
      globalDispatch({
        type: ACTION.ADD_TO_LIKED_VIDEO,
        payload: data,
      });
    }
  };
  const watchLaterHandler = (data) => {
    if (isVideoInWatchLater) {
      globalDispatch({
        type: ACTION.REMOVE_FORM_WATCH_LATER,
        payload: data._id,
      });
    } else {
      globalDispatch({
        type: ACTION.ADD_TO_WATCH_LATER,
        payload: data,
      });
    }
  };

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
          <button onClick={() => likedVideoHandler(video)}>
            <i
              className={`bi bi-hand-thumbs-up${
                isVideoInLiked ? "-fill" : ""
              } card-icon`}
            ></i>
          </button>
          <button onClick={() => watchLaterHandler(video)}>
            <i
              className={`bi bi-bookmarks${
                isVideoInWatchLater ? "-fill" : ""
              } card-icon`}
            ></i>
          </button>
          <button>
            <i className={`bi bi-plus-circle-fill card-icon`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

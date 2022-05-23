import { LikeVideoApi, WatchLaterApi } from "../axiosAPI's";

export const ClickHandler = () => {
  const { likeVideoPost, likeVideoDelete } = LikeVideoApi();
  const { watchLaterPost, watchLaterDelete } = WatchLaterApi();

  const likedVideoHandler = (data, isVideoInLiked) => {
    if (!isVideoInLiked) {
      likeVideoPost(data);
    } else {
      likeVideoDelete(data);
    }
  };

  const watchLaterHandler = (data, isVideoInWatchLater) => {
    if (!isVideoInWatchLater) {
      watchLaterPost(data);
    } else {
      watchLaterDelete(data);
    }
  };

  return { likedVideoHandler, watchLaterHandler };
};

export const globalReducer = (state, { type, payload }) => {
  switch (type) {
    case "LIKE_VIDEO":
      return { ...state, likeVideo: payload };
    case "WATCH_LATER":
      return { ...state, watchLater: payload };
    default:
      return state;
  }
};

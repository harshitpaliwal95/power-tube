export const globalReducer = (state, { type, payload }) => {
  switch (type) {
    case "LIKE_VIDEO":
      return { ...state, likeVideo: payload };
    case "WATCH_LATER":
      return { ...state, watchLater: payload };
    case "HISTORY":
      return { ...state, history: payload };
    case "SIDE_BAR":
      return { ...state, sideBar: payload ?? !state.sideBar };
    default:
      return state;
  }
};

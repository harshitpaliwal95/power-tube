import { ACTION } from "../action/action";

export const globalReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION.ADD_TO_LIKED_VIDEO:
      return { ...state, likeVideo: [...state.likeVideo, { ...payload }] };
    case ACTION.REMOVE_FORM_LIKED_VIDEO:
      return {
        ...state,
        likeVideo: state.likeVideo.filter((item) => item._id !== payload),
      };
    case ACTION.ADD_TO_WATCH_LATER:
      return { ...state, watchLater: [...state.watchLater, { ...payload }] };
    case ACTION.REMOVE_FORM_WATCH_LATER:
      return {
        ...state,
        watchLater: state.watchLater.filter((item) => item._id !== payload),
      };
    default:
      return state;
  }
};

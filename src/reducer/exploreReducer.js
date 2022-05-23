import { ACTION } from "../action/action";

const exploreReducer = (state, { type, payload }) => {
  switch (type) {
    case "ALL_VIDEO":
      return {
        ...state,
        explore: payload,
      };
    case ACTION.FILTER:
      return {
        ...state,
        category: {
          ...state.category,
          onePiece: payload === "onePiece",
          naruto: payload === "naruto",
          demonSlayer: payload === "demonSlayer",
          jujutsuKaisen: payload === "jujutsuKaisen",
        },
      };
    default:
      return state;
  }
};
export { exploreReducer };

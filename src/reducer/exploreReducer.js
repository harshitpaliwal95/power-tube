const exploreReducer = (state, action) => {
  const { category } = state;
  const { onePiece, naruto, demonSlayer, jujutsuKaisen } = category;

  switch (action.type) {
    case "onePiece":
      return {
        ...state,
        category: {
          ...state.category,
          onePiece: !onePiece,
          naruto: false,
          demonSlayer: false,
          jujutsuKaisen: false,
        },
      };
    case "naruto":
      return {
        ...state,
        category: {
          ...state.category,
          naruto: !naruto,
          onePiece: false,
          demonSlayer: false,
          jujutsuKaisen: false,
        },
      };
    case "demonSlayer":
      return {
        ...state,
        category: {
          ...state.category,
          demonSlayer: !demonSlayer,
          onePiece: false,
          naruto: false,
          jujutsuKaisen: false,
        },
      };
    case "jujutsuKaisen":
      return {
        ...state,
        category: {
          ...state.category,
          jujutsuKaisen: !jujutsuKaisen,
          demonSlayer: false,
          onePiece: false,
          naruto: false,
        },
      };
    case "all":
      return {
        ...state,
        category: {
          ...state.category,
          jujutsuKaisen: false,
          demonSlayer: false,
          onePiece: false,
          naruto: false,
        },
      };

    default:
      return state;
  }
};
export { exploreReducer };

import "./chips.css";
import { useExplore } from "../../context/exploreContext";
import { ACTION } from "../../action/action";

export const Chips = () => {
  const {
    exploreDispatch,
    exploreState: { category },
  } = useExplore();

  const chipsData = [
    { chipName: "All", chipType: "" },
    { chipName: "One Piece", chipType: "onePiece" },
    { chipName: "Naruto", chipType: "naruto" },
    { chipName: "Demon Slayer", chipType: "demonSlayer" },
    { chipName: "Jujutsu Kaisen", chipType: "jujutsuKaisen" },
  ];

  return (
    <>
      <span
        className={`chips ${
          !category.onePiece &&
          !category.naruto &&
          !category.demonSlayer &&
          !category.jujutsuKaisen
            ? "chips-active"
            : null
        }`}
        onClick={() => exploreDispatch({ type: ACTION.FILTER, payload: "" })}
      >
        All
      </span>
      <span
        className={`chips ${category.onePiece && "chips-active"}`}
        onClick={() =>
          exploreDispatch({ type: ACTION.FILTER, payload: "onePiece" })
        }
      >
        One Piece
      </span>
      <span
        className={`chips ${category.naruto && "chips-active"}`}
        onClick={() =>
          exploreDispatch({ type: ACTION.FILTER, payload: "naruto" })
        }
      >
        Naruto
      </span>
      <span
        className={`chips ${category.demonSlayer && "chips-active"}`}
        onClick={() =>
          exploreDispatch({ type: ACTION.FILTER, payload: "demonSlayer" })
        }
      >
        Demon Slayer
      </span>
      <span
        className={`chips ${category.jujutsuKaisen && "chips-active"}`}
        onClick={() =>
          exploreDispatch({ type: ACTION.FILTER, payload: "jujutsuKaisen" })
        }
      >
        Jujutsu Kaisen
      </span>
    </>
  );
};

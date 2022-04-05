import "./chips.css";
import { useExplore } from "../../context/exploreContext";
import { ACTION } from "../../action/action";

export const Chips = ({ data }) => {
  const { exploreDispatch } = useExplore();

  const { chipName, chipType } = data;

  return (
    <span
      className="chips"
      onClick={() =>
        exploreDispatch({ type: ACTION.FILTER, payload: chipType })
      }
    >
      {chipName}
    </span>
  );
};

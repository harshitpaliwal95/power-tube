import "./chips.css";
import { useExplore } from "../../context/exploreContext";

export const Chips = ({ data }) => {
  const { exploreDispatch } = useExplore();

  const { chipName, chipType } = data;

  return (
    <span
      className="chips"
      onClick={() => exploreDispatch({ type: "FILTER", payload: chipType })}
    >
      {chipName}
    </span>
  );
};

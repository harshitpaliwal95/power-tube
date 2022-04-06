import { createContext, useContext, useReducer } from "react";
import { exploreReducer } from "../reducer/exploreReducer";

const ExploreContext = createContext();

const ExploreProvider = ({ children }) => {
  const [exploreState, exploreDispatch] = useReducer(exploreReducer, {
    explore: [],
    category: {
      onePiece: false,
      naruto: false,
      demonSlayer: false,
      jujutsuKaisen: false,
    },
  });

  return (
    <ExploreContext.Provider value={{ exploreState, exploreDispatch }}>
      {children}
    </ExploreContext.Provider>
  );
};

const useExplore = () => useContext(ExploreContext);

export { useExplore, ExploreProvider };

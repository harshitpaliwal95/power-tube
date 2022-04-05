import { createContext, useContext, useReducer } from "react";
import { globalReducer } from "../reducer";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(globalReducer, {
    likeVideo: [],
    watchLater: [],
  });

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useVideoGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useVideoGlobal };

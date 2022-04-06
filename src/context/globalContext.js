import { createContext, useContext, useReducer, useState } from "react";
import { globalReducer } from "../reducer";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [globalState, globalDispatch] = useReducer(globalReducer, {
    likeVideo: [],
    watchLater: [],
  });

  return (
    <GlobalContext.Provider
      value={{ globalState, globalDispatch, modal, setModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useVideoGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useVideoGlobal };

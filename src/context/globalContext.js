import { createContext, useContext, useReducer } from "react";
import { globalReducer } from "../reducer/globarReducer";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    likeVideo: [],
    watchLater: [],
    history: [],
    sideBar: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useVideoGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useVideoGlobal };

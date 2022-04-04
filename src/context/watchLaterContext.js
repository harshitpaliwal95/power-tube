import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../reducer";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDisptach] = useReducer(watchLaterReducer, {
    watchLater: [],
  });
  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDisptach }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { useWatchLater, WatchLaterProvider };

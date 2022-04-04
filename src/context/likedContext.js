import { createContext, useContext, useReducer } from "react";
import { likedReducer } from "../reducer";

const LikedVideoContext = createContext();

const LikedProvider = ({ children }) => {
  const [likedState, likedDispatch] = useReducer(likedReducer, {
    likeVideo: [],
  });

  return (
    <LikedVideoContext.Provider value={{ likedState, likedDispatch }}>
      {children}
    </LikedVideoContext.Provider>
  );
};

const useLiked = () => useContext(LikedVideoContext);

export { LikedProvider, useLiked };

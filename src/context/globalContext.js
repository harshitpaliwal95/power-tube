import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [likeVideo, setLikeVideo] = useState([]);
  const [watchLater, setWatchlater] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        modal,
        setModal,
        likeVideo,
        setLikeVideo,
        watchLater,
        setWatchlater,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useVideoGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useVideoGlobal };

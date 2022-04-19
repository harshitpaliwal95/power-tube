import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [likeVideo, setLikeVideo] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        modal,
        setModal,
        likeVideo,
        setLikeVideo,
        watchLater,
        setWatchLater,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useVideoGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useVideoGlobal };

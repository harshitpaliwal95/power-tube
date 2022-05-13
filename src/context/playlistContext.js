import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  return (
    <PlaylistContext.Provider
      value={{ playlist, setPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };

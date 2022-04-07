import { Navbar, Sidebar } from "../../components";
import { NewPlaylist } from "./components/newPlatlist";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
export const Playlist = () => {
  const {
    auth: { token, isAuth },
  } = useAuth();
  const [playlist, setPlaylist] = useState([]);

  const header = { authorization: token };
  useEffect(() => {
    if (isAuth) {
      (async () => {
        try {
          const response = await axios.get("/api/user/playlists", {
            headers: header,
          });
          setPlaylist(response.data.playlists);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            {playlist.map((playlist) => (
              <NewPlaylist key={playlist._id} playlist={playlist} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

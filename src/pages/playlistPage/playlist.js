import { Sidebar, PagePlaceHolder } from "../../components";
import { NewPlaylist } from "./components/newPlatlist";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import { usePlaylist } from "../../context";
export const Playlist = () => {
  const { playlist, setPlaylist } = usePlaylist();
  const {
    auth: { token, isAuth },
  } = useAuth();

  const header = { authorization: token };

  const getdata = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: header,
      });
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      getdata();
    } else {
      setPlaylist([]);
    }
  }, []);

  return (
    <div>
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {playlist.length <= 0 && <PagePlaceHolder />}
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

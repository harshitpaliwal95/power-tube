import { Navbar, Sidebar, PagePlaceHolder } from "../../components";
import { NewPlaylist } from "./components/newPlatlist";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
export const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
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
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {playlist.length === 0 && <PagePlaceHolder />}
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

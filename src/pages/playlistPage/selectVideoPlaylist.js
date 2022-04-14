import { Navbar, Sidebar, Card } from "../../components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context";
import axios from "axios";

export const SelectVideoPlaylist = () => {
  const [selectedVideo, setSelectedVideo] = useState();
  const {
    auth: { token },
  } = useAuth();

  const { id } = useParams();

  const header = { authorization: token };
  useEffect(() => {
    const getLink = "/api/user/playlists/" + id;
    (async () => {
      try {
        const response = await axios.get(getLink, { headers: header });
        setSelectedVideo(response.data.playlist.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            {selectedVideo &&
              selectedVideo.map((video) => (
                <Card key={video._id} video={video} />
              ))}
          </div>
        </main>
      </section>
    </div>
  );
};

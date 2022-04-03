import { useState, useEffect } from "react";
import { Navbar, Sidebar, Card } from "../../components";
import "./explore.css";
import axios from "axios";

export const Explore = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="chip-container">
            <span className="chips">All</span>
            <span className="chips">One Piece</span>
            <span className="chips">Naruto</span>
            <span className="chips">Demon Slayer</span>
            <span className="chips">Jujutsu kaisain</span>
          </div>

          <div className="grid-three">
            {videos.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

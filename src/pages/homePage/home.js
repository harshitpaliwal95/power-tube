import { React, useEffect, useState } from "react";
import { Sidebar, Card, Loader } from "../../components";
import axios from "axios";
import "./home.css";

export const Home = () => {
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
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {videos.length === 0 ? (
            <Loader />
          ) : (
            <div className="grid-three">
              {videos.slice(0, 7).map((video) => (
                <Card key={video._id} video={video} />
              ))}
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

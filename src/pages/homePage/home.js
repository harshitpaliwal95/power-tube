import { React, useEffect, useState } from "react";
import { Navbar, Sidebar, Card } from "../../components";
import axios from "axios";

import "./home.css";

export const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
        setLoader(false);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  console.log(...videos);
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {loader && <div className="heading-lg">....loading</div>}
          <div className="grid-three">
            {videos.slice(0, 7).map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

import { React, useEffect, useState } from "react";
import { Sidebar, Card, Loader } from "../../components";
import axios from "axios";
import "./home.css";
import { useExplore } from "../../context";

export const Home = () => {
  const {
    exploreState: { explore },
    exploreDispatch,
  } = useExplore();
  const [video, setVideo] = useState(explore);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        exploreDispatch({ type: "ALL_VIDEO", payload: response.data.videos });
        setTimeout(() => {
          setVideo(() => response.data.videos);
        }, 300);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return (
    <main className="main-box">
      <Sidebar />
      <div className="main-product">
        {video.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid-three">
            {video.slice(0, 7).map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

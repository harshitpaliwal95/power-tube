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

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        exploreDispatch({ type: "ALL_VIDEO", payload: response.data.videos });
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return (
    <main className="main-box">
      <Sidebar />
      <div className="main-product">
        {explore.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid-three">
            {explore.slice(0, 7).map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

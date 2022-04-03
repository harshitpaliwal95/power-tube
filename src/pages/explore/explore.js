import { useState, useEffect } from "react";
import { Navbar, Sidebar, Card } from "../../components";
import "./explore.css";
import axios from "axios";
import { useExplore } from "../../context/exploreContext";
import { setCategory } from "../../utils/setCategory";

export const Explore = () => {
  const [videos, setVideos] = useState([]);
  const { exploreState, exploreDispatch } = useExplore();

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

  const defaultState = [...videos];
  const categoryVideos = setCategory(defaultState, exploreState.category);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="chip-container">
            <span
              className="chips"
              onClick={() => exploreDispatch({ type: "all" })}
            >
              All
            </span>
            <span
              className="chips"
              onClick={() => {
                exploreDispatch({
                  type: "onePiece",
                });
              }}
            >
              One Piece
            </span>
            <span
              className="chips"
              onClick={() => {
                exploreDispatch({ type: "naruto" });
              }}
            >
              Naruto
            </span>
            <span
              className="chips"
              onClick={() => {
                exploreDispatch({ type: "demonSlayer" });
              }}
            >
              Demon Slayer
            </span>
            <span
              className="chips"
              onClick={() => {
                exploreDispatch({ type: "jujutsuKaisen" });
              }}
            >
              Jujutsu kaisain
            </span>
          </div>

          <div className="grid-three">
            {categoryVideos.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

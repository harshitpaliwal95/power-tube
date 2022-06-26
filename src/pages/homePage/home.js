import { React, useEffect, useState } from "react";
import { Card, Loader } from "../../components";
import axios from "axios";
import "./home.css";
import { useExplore } from "../../context";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const {
    exploreState: { explore },
    exploreDispatch,
  } = useExplore();
  const [video, setVideo] = useState(explore);
  const [loader, setLoader] = useState(true);
  const [randomVideo, setRandomVideo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        exploreDispatch({ type: "ALL_VIDEO", payload: response.data.videos });
        setVideo(() => response.data.videos);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  useEffect(() => {
    const random = Math.floor(Math.random() * video.length);
    setRandomVideo(() => random && video[random]);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [video]);

  return (
    <main className="main-box">
      <div className="main-product">
        <div className="hero-video flex-center">
          {loader && (
            <div className="loader-position">
              {" "}
              <Loader />
            </div>
          )}
          <iframe
            className={`hero-iframe ${loader && "visiblity-hidden"}`}
            src={`https://www.youtube-nocookie.com/embed/${randomVideo._id}?autoplay=1&mute=1&modestbranding=1&fs=0&showinfo=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="hero-display flex-center">
          <div className="flex-column spacial-text spacial-box">
            <span className="yellow-highlight">
              PO
              <span className="red-highlight">WER TU</span>BE
            </span>
            <button
              className="btn btn-outline hero-btn"
              onClick={() => navigate("/explore")}
            >
              EXPLORE MORE
            </button>
          </div>
        </div>
        <div className="grid-three demo-video">
          {video.slice(5, 8).map((video) => (
            <Card key={video._id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
};

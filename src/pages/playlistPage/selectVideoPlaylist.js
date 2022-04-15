import { Navbar, Sidebar, Card } from "../../components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, usePlaylist } from "../../context";

export const SelectVideoPlaylist = () => {
  const { playlist } = usePlaylist();

  const { id } = useParams();
  const getVideos = playlist.find((item) => item._id === id);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            {getVideos &&
              getVideos.videos.map((video) => (
                <Card key={video._id} video={video} />
              ))}
          </div>
        </main>
      </section>
    </div>
  );
};

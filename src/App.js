import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Mockman from "mockman-js";
import {
  Explore,
  Home,
  LikedVideo,
  Login,
  Playlist,
  SignUp,
  WatchLater,
} from "./pages";
import { SelectVideoPlaylist } from "./pages/playlistPage/selectVideoPlaylist";
import { Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<LikedVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist/:id" element={<SelectVideoPlaylist />} />
      </Routes>
    </div>
  );
}

export default App;

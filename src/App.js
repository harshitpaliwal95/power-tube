import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Mockman from "mockman-js";
import {
  Explore,
  History,
  Home,
  LikedVideo,
  Login,
  Playlist,
  SignUp,
  SingleVideoPage,
  WatchLater,
} from "./pages";
import { SelectVideoPlaylist } from "./pages/playlistPage/selectVideoPlaylist";
import { Navbar, ResponsiveSidebar } from "./components";
import { ProtectedRoute } from "./hook/protectedRoute";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <ResponsiveSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <Playlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/liked"
          element={
            <ProtectedRoute>
              <LikedVideo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlater"
          element={
            <ProtectedRoute>
              <WatchLater />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <ProtectedRoute>
              <SelectVideoPlaylist />
            </ProtectedRoute>
          }
        />
        <Route path="/video/:id" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;

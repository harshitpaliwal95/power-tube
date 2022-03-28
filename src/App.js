import "./App.css";
import { Home } from "./pages/homePage/home";
import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

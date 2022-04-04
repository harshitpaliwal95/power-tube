import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ExploreProvider, LikedProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ExploreProvider>
        <LikedProvider>
          <App />
        </LikedProvider>
      </ExploreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  ExploreProvider,
  GlobalProvider,
  PlaylistProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ExploreProvider>
          <GlobalProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </GlobalProvider>
        </ExploreProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

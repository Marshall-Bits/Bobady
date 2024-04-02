import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { UsersProvider } from "./context/UsersProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersProvider>
      <Router>
        <App />
      </Router>
    </UsersProvider>
  </React.StrictMode>
);

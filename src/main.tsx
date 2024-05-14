import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { UsersProvider } from "./context/UsersProvider";
import { DataProvider } from "./context/DataProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <UsersProvider>
        <Router>
          <App />
        </Router>
      </UsersProvider>
    </DataProvider>
  </React.StrictMode>
);

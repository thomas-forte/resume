import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./scss/index.scss";

import { config } from "./conf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>
);

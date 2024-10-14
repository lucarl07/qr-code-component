// Stylesheets:
import * as bootstrap from "bootstrap";
import "./defaults.scss";

// Dependencies:
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

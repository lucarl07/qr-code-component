// Dependencies:
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";

// Stylesheets:
import * as bootstrap from "bootstrap";
import "./styles.scss";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

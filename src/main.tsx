import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/roboto-flex/full.css";
import "./app.css";
import "@kristjanjansen/design-system/style.css";
import "@kristjanjansen/design-system/brand1-light.css";
import "@kristjanjansen/design-system/brand1-dark.css";
import "@kristjanjansen/design-system/brand2-light.css";
import "@kristjanjansen/design-system/brand2-dark.css";
import { App } from "./App.tsx";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

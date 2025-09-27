// This file is for development only
// In production, use entry-client.tsx for SSR
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EntryPointAppComponent from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EntryPointAppComponent />
  </StrictMode>
);

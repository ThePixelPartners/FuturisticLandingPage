import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from 'aos';
import { useEffect } from "react";

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 100,
});

createRoot(document.getElementById("root")!).render(<App />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>
);

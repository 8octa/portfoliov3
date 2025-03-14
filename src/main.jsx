import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <Grid />
    <Footer />
  </StrictMode>
);

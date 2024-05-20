import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Grid from "./components/Grid/Grid";
import Testimonials from "./components/Testimonials/Testimonials";
import ImgGrid from "./components/ImgGrid/ImgGrid";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Grid />
    <Testimonials />
    <ImgGrid />
    <Footer />
  </React.StrictMode>
);

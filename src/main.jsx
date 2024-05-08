import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Grid from "./components/Grid/Grid";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Grid />
    {/* <p>
      Client testimonials We put our trust in Sunnyside and
      they delivered, making sure our needs were met and deadlines were always
      hit. Emily R. Marketing Director Sunnyside’s enthusiasm coupled with their
      keen interest in our brand’s success made it a satisfying and enjoyable
      experience. Thomas S. Chief Operating Officer Incredible end result! Our
      sales increased over 400% when we worked with Sunnyside. Highly
      recommended! Jennie F. Business Owner About Services Projects Contact
    </p> */}
  </React.StrictMode>
);

import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Tickets from "./components/Tickets";
import Footer from "./components/Footer"
import "./App.css";

// Bootstrap CSS styling
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div id="movies">
        <Movies />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="tickets">
        <Tickets />
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import Tickets from "./components/Tickets";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Specials from "./components/Specials";
import Footer from "./components/Footer"
import "./App.css";

// Bootstrap CSS styling
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [ticketStore, setTicketStore] = useState(false);

  const toggleTicketStore = (value) => {
    setTicketStore(value);
  };

  const [featuredMovie, setFeaturedMovie] = useState (0);

  const changeFeaturedMovie = (value) => {
    console.log('in app.js '+value)
    setFeaturedMovie(value);
  }

  return (
      <div>
        {ticketStore&& (
          <Tickets toggleTicketStore={toggleTicketStore} />)}
        <Header toggleTicketStore={toggleTicketStore} />
        <Banner toggleTicketStore={toggleTicketStore} changeFeaturedMovie={changeFeaturedMovie}/>
        <div id="movies">
          <Movies featuredMovie={featuredMovie}/>
        </div>
        <div>
          <Specials />
        </div>
        <div id="newsletter">
          <Newsletter />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
  );
}

export default App;

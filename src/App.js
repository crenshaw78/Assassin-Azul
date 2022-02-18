import React from "react";
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

class App extends React.Component {

  state = {
      displayedMovie: 0,
      ticketStore: false
  }

  setTicketStore = (value) => {
    this.setState({
      ticketStore: value
    })
  }

  setdisplayedMovie = (value) => {
    console.log(value);
    this.setState({
      displayedMovie: value
    })
  }

  render() {

    return (
        <div>
          {this.state.ticketStore && (
            <Tickets setTicketStore={this.setTicketStore} />)}
          <Header setTicketStore={this.setTicketStore} />
          <Banner setTicketStore={this.setTicketStore} setdisplayedMovie={this.setdisplayedMovie}/>
          <div id="movies">
            <Movies key = {'showMovie'+this.state.displayedMovie} displayedMovie={this.state.displayedMovie}/>
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
}

export default App;

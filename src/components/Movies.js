import React from "react";
import movieList from "../assets/js/array";


class Movies extends React.Component {

  state = {
      movieWithExtraInfo: this.props.displayedMovie,
  }

  setMovieWithExtraInfo = (value) => {
    this.setState({
      movieWithExtraInfo: value
    })
  }

  render(props) {

    return (
      <div className="s-bkgd flex-center padding-2">
        {console.log("displayedMovie = " + this.props.displayedMovie)}
        {console.log("movieWithExtraInfo = " + this.state.movieWithExtraInfo)}
        <h1>MOVIES SHOWN</h1>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          {movieList.map((movie, i) => (
            <div key={'m'+i} style={{height: 500, display: "flex", flexDirection: "column", justifyContent: "end", padding: 10}}>
              <img
                src={require(`../assets/images/${movie.image}`).default}
                alt={movie.title}
                style={(parseInt(this.state.movieWithExtraInfo) === movie.id) ? { width: 240, height: 360 } : { width: 200, height: 300 }}
                onMouseEnter={() => this.setMovieWithExtraInfo(i)}
                onMouseLeave={() => this.setMovieWithExtraInfo(this.props.displayedMovie)}
                />
              {(parseInt(this.state.movieWithExtraInfo) === movie.id) && (
                  <div style={{backgroundColor: "#6e9ee6", textAlign: "center", fontSize: "2vmin", paddingTop: 10, width: 240}}>
                    <p>{movie.title} {movie.subtitle}</p>
                    <p>{movie.time}</p>
                  </div>
                )}
            </div>
          ))}     
        </div>
      </div>
    );
  }
}

export default Movies;

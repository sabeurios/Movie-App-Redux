import React from "react";
import movies from "../MovieDB/movies";
import MoviesContainer from "../components/movie-container";
import FilterName from "../components/filter-by-name";
import FilterByRate from "../components/filter-by-rate";
import MyModal from "../components/modal-add";

class MoviePage extends React.Component {
  state = {
    movies,
    movieName: "",
    ratingCountFilter: "",
  };

  handlefilterByName = (input) => {
    this.setState({
      movieName: input,
    });
  };
  handleRatingFilter = (newRating) => {
    this.setState({
      ratingCountFilter: newRating,
    });
  };

  render() {
    let filterMovie = this.state.movies.filter(
      (movie) =>
        movie.rate >= this.state.ratingCountFilter &&
        movie.title.toLowerCase().includes(this.state.movieName.toLowerCase())
    );

    return (
      <div>
        <div className="nav-container">
          <FilterName filterByName={this.handlefilterByName} />
          <FilterByRate
            rate={this.state.ratingCountFilter}
            onchange={this.handleRatingFilter}
            size={50}
            className={"search-stars"}
          />
        </div>
        <div className="global-container">
          <MoviesContainer movies={filterMovie} />
          <MyModal />
        </div>
      </div>
    );
  }
}
export default MoviePage;

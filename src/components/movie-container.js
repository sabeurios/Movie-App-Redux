import React from "react";
import MovieCard from "./movie-card";
import { connect } from "react-redux";

const MoviesContainer = ({ movies }) => {
  return (
    <div className="container">
      <div className="movies-container">
        {movies.map((movie, index) => (
          <MovieCard key={index} idMovie={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps, null)(MoviesContainer);

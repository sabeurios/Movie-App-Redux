import React from "react";
import MovieCard from "./movie-card";

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
export default (MoviesContainer);

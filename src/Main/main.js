import React from "react";
import MoviesContainer from "../components/movie-container";
import { connect } from "react-redux";
// import { searchMovie } from "../Actions/actions";
import FilterByRate from "../components/filter-by-rate";
import FilterByName from "../components/filter-by-name";
import ModalAdd from "../components/modal-add";

const MoviesMainPage = ({ movies, inputName, min_Rate }) => {
  let filterMovie = movies.filter(
    (movie) =>
      movie.rate >= min_Rate &&
      movie.title.toLowerCase().includes(inputName.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="nav-container">
          <FilterByName />
          <FilterByRate size={50} />
        </div>
      </div>
      <hr />
      <div className="global-container">
        <MoviesContainer movies={filterMovie} />
        <ModalAdd />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies,
  inputName: state.searchName,
  min_Rate: state.searchRate,
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchMovie: (title, rate) => {
//       dispatch(searchMovie(title, rate));
//     },
//   };
// };
export default connect(mapStateToProps, null)(MoviesMainPage);

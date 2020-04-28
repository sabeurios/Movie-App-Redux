import React from "react";
import StarRating from "./star-rating";
import ModalEdit from "./modal-edit";
import { connect } from "react-redux";
import { removeMovie, editMovie, updateMovie } from "../Actions/actions";
import { useHistory } from "react-router-dom";

const MovieCard = (props) => {
  const { movie, idMovie } = props;
  let history = useHistory();

  return (
    <div className="card">
      <StarRating rate={movie.rate} className={"search-stars"} />
      <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">
          {movie.title}-{movie.year}
        </h5>
        <div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => history.push(`/${movie.id}`)}
          >
            Movie Description
          </button>
          <div className="button-card">
            <ModalEdit movie={movie} />
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => props.removeMovie(idMovie)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeMovie: (id) => dispatch(removeMovie(id)),
  editMovie: (id) => dispatch(editMovie(id)),
  updateMovie: (obj) => dispatch(updateMovie(obj)),
});
export default connect(null, mapDispatchToProps)(MovieCard);

import React, { useState } from "react";
import StarRating from "./star-rating";
import Modal from "react-modal";
import { connect } from "react-redux";
import { removeMovie, editMovie, updateMovie } from "../Actions/actions";

const MovieCard = (props) => {
  const { movie, idMovie } = props;
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="card">
      <StarRating rate={movie.rate} className={"search-stars"} />
      <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">
          {movie.title}-{movie.year}
        </h5>
        <div>
          <button className="btn btn-outline-secondary">
            Movie Description
          </button>
          <div className="button-card">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setShowModal(true);
                props.editMovie(movie.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => props.removeMovie(idMovie)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="modall"
        contentLabel="Example Modal"
      >
        <label for="fname">Movie Name</label>
        <input
          type="text"
          id="fname"
          name="title"
          placeholder={movie.title}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label for="lname">Movie rate</label>
        <input
          type="text"
          id="lname"
          name="rate"
          placeholder={movie.rate}
          value={rate}
          onChange={(event) => setRate(event.target.value)}
        />
        <label for="lname">Production year</label>
        <input
          type="text"
          id="lname"
          name="year"
          placeholder={movie.year}
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <label for="lname">Movie Description</label>
        <input
          type="text"
          id="lname"
          name="description"
          placeholder={movie.description}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label for="lname">Image Url</label>
        <input
          type="text"
          id="lname"
          name="imageUrl"
          placeholder={movie.imageUrl}
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button
          className="btn btn-primary float-right"
          onClick={() => {
            props.updateMovie({
              id: movie.id,
              title: title,
              rate: rate,
              imageUrl: image,
              year: year,
              description: description,
            });
            setShowModal(false);
          }}
        >
          update
        </button>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeMovie: (payload) => {
      dispatch(removeMovie(payload));
    },
    editMovie: (payload) => {
      dispatch(editMovie(payload));
    },
    updateMovie: (payload) => {
      dispatch(updateMovie(payload));
    },
  };
};
export default connect(null, mapDispatchToProps)(MovieCard);

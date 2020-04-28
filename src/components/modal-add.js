import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addMovie } from "../Actions/actions";

const ModalAdd = ({ addMovie }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const addNewMovie = () => {
    addMovie({
      id: Date.now(),
      title: title,
      rate: rate,
      imageUrl: image,
      year: year,
      description: description,
    });
  };

  return (
    <div>
      <div className="add-card" onClick={() => setShowModal(true)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdxwVdH7y2TMTF4hZxwGQC9TgJ6zx8wtF-s_MgxXL_8w3MR1IE&usqp=CAU"
          alt="add-on"
        />
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="myModal"
        contentLabel="Example Modal"
      >
        <label for="fname">Movie Name</label>
        <input
          type="text"
          id="fname"
          name="title"
          value={title}
          placeholder="Enter movie name"
          onChange={(event) => setTitle(event.target.value)}
        />

        <label for="lname">Movie rate</label>
        <input
          type="text"
          id="lname"
          name="rate"
          value={rate}
          placeholder="Enter movie rate"
          onChange={(event) => setRate(event.target.value)}
        />
        <label for="lname">Production year</label>
        <input
          type="text"
          id="lname"
          name="year"
          value={year}
          placeholder="Enter movie production year"
          onChange={(event) => setYear(event.target.value)}
        />
        <label for="lname">Movie Description</label>
        <input
          type="text"
          id="lname"
          name="description"
          value={description}
          placeholder="Enter movie description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <label for="lname">Image Url</label>
        <input
          type="text"
          id="lname"
          name="imageUrl"
          value={image}
          placeholder="Enter movie image url"
          onChange={(event) => setImage(event.target.value)}
        />
        <button
          className="btn btn-danger  float-right"
          onClick={() => setShowModal(false)}
        >
          close
        </button>
        <button
          className="btn btn-success  float-right"
          onClick={() => {
            addNewMovie();
            alert("Added successfully");
            setShowModal(false);
          }}
        >
          save
        </button>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addMovie: (obj) => dispatch(addMovie(obj)),
});
export default connect(null, mapDispatchToProps)(ModalAdd);

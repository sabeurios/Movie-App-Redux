import React from "react";
import Modal from "react-modal";
import "../App.css";
import { connect } from "react-redux";
import { updateMovie } from "../Actions/actions";

class ModalEdit extends React.Component {
  state = {
    modalIsOpen: false,
    id: this.props.movie.id,
    title: this.props.movie.title,
    rate: this.props.movie.rate,
    imageUrl: this.props.movie.imageUrl,
    year: this.props.movie.year,
    description: this.props.movie.description,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  update = (e) => {
    e.preventDefault();
    const { id, title, rate, imageUrl, year, description } = this.state;
    const updatedMovie = {
      id,
      title,
      rate,
      imageUrl,
      year,
      description,
    };

    this.props.updateMovie(updatedMovie);
    this.setState({
      modalIsOpen: false,
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-secondary btn-sm" onClick={this.openModal}>
          Edit
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="myModal"
          contentLabel="Example Modal"
        >
          <label for="fname">Movie Title</label>
          <input
            value={this.state.title}
            type="text"
            id="fname"
            name="title"
            onChange={this.handleChange}
          />

          <label for="lname">Movie rating</label>
          <input
            value={this.state.rate}
            type="text"
            id="lname"
            name="rate"
            onChange={this.handleChange}
          />
          <label for="lname">Year</label>
          <input
            value={this.state.year}
            type="text"
            id="lname"
            name="year"
            onChange={this.handleChange}
          />
          <label for="lname">Description</label>
          <input
            value={this.state.description}
            type="text"
            id="lname"
            name="description"
            onChange={this.handleChange}
          />

          <label for="lname">Image Url</label>
          <input
            value={this.state.imageUrl}
            type="text"
            id="lname"
            name="imageUrl"
            onChange={this.handleChange}
          />
          <button
          className="btn btn-danger float-right"
          onClick={() => this.closeModal()}
        >
          close
        </button>
          <button className="btn btn-primary float-right" onClick={(e) => this.update(e)}>
            update
          </button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateMovie: (obj) => dispatch(updateMovie(obj)),
});
export default connect(null, mapDispatchToProps)(ModalEdit);

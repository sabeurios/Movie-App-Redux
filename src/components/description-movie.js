import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StarRating from "./star-rating";

class DescriptionMovie extends React.Component {
  state = {
    id: this.props.match.params.id,
  };

  render() {
    const targetMovie = this.props.movies.find(
      (movie) => movie.id === this.state.id
    );

    return (
      <div>
        {targetMovie ? (
          <div key={targetMovie.id}>
            <img src={targetMovie.imageUrl} alt="" />
            <h1>
              {targetMovie.title} - {targetMovie.year}
            </h1>
            <StarRating rate={targetMovie.rate} />
            <p>{targetMovie.description}</p>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps, null)(DescriptionMovie);

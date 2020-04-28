import React from "react";
import { connect } from "react-redux";
import { inputSearchName } from "../Actions/actions";

const FilterByName = ({ inputSearchName }) => {
  return (
    <div>
      <div className="input-group md-form form-sm form-1 pl-0">
        <input
          onChange={(event) => inputSearchName(event.target)}
          placeholder="Enter movie name to search ..."
          className="width-input form-control my-0 py-1"
          type="text"
          aria-label="Search"
        />
        <div className="input-group-append">
          <span
            className="span-color input-group-text red lighten-3"
            id="basic-text1"
          >
            <i className="fas fa-search text-grey" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  inputSearchName: (payload) => dispatch(inputSearchName(payload)),
});
export default connect(null, mapDispatchToProps)(FilterByName);

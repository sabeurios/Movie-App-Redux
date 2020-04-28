import React from "react";
import StarRating from "./star-rating";
import { connect } from "react-redux";
import { inputSearchRate } from "../Actions/actions";

const FilterByRate = ({ size, searchRate }) => {
  return (
    <div>
      <StarRating size={size} rate={searchRate} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  searchRate: state.searchRate,
});
const mapDispatchToProps = (dispatch) => ({
  inputSearchRate: (payload) => dispatch(inputSearchRate(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterByRate);

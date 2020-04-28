import React from "react";
import { connect } from "react-redux";
import { inputSearchRate } from "../Actions/actions";

const StarRating = (props) => {
  const { size, rate, className, inputSearchRate } = props;
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      star.push(
        <span key={i} onClick={() => inputSearchRate(i + 1)}>
          ★
        </span>
      );
    } else {
      star.push(
        <span key={i} onClick={() => inputSearchRate(i + 1)}>
          ☆
        </span>
      );
    }
  }
  return (
    <div className={className} style={{ fontSize: size }}>
      {star}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  inputSearchRate: (payload) => dispatch(inputSearchRate(payload)),
});
export default connect(null, mapDispatchToProps)(StarRating);

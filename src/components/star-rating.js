import React from 'react'

const StarRating = (props) => {
  const { rate,change, size, className } = props;
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      star.push(<span key={i}  onClick={()=>change(i+1)}>★</span>);
    } else {
      star.push(<span key={i} onClick={()=>change(i+1)}>☆</span>);
    }
  }
  return <div className={className} style={{fontSize: size}}>{star}</div>;
};
export default StarRating;

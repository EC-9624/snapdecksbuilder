import React from "react";

function DeckCard(props) {
  const { art } = props.props;
  return (
    <img src={art} alt="" className="object-cover object-center h-36 w-28 " />
  );
}

export default DeckCard;

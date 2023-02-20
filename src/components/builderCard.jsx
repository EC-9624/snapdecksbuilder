import React from "react";

const BuilderCard = (props) => {
  const { art, cid, inDeck } = props.props;
  const { toggle } = props;
  const className = inDeck ? "grayscale" : "";
  return (
    <div className="w-36 h-32 mb-10 flex-col ">
      <img
        src={art}
        alt=""
        loading="lazy"
        className={className}
        onClick={() => toggle(cid)}
      />
    </div>
  );
};

export default BuilderCard;

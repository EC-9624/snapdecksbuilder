import React from "react";

const BuilderCard = (props) => {
  const { art } = props.props;
  return (
    <div className="w-36 h-32 mb-10 flex-col ">
      <img src={art} alt="" loading="lazy" />
    </div>
  );
};

export default BuilderCard;

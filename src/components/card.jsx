import React from "react";

const Card = (props) => {
  const { art, ability, cid, collected } = props.props;
  const { toggle } = props;
  const className = collected ? "" : "grayscale";

  return (
    <div className="w-40 h-64 mb-10 flex-col ">
      <img
        className={`cursor-pointer ${className}`}
        src={art}
        alt=""
        loading="lazy"
        onClick={() => toggle(cid)}
      />
      <div className="p-2 mt-2 items-center justify-center">
        <p className=" font-light text-sm text-white dark:text-gray-400  pl-6">
          {ability}
        </p>
      </div>
    </div>
  );
};

export default Card;

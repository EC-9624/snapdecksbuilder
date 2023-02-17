import React from "react";

const Card = (data) => {
  const { collected, onClick } = data;
  console.log(onClick);
  const className = collected
    ? "rounded-t-lg grayscale-0"
    : "rounded-t-lg grayscale";

  return (
    <div className="w-40 h-64 mb-10 flex-col ">
      <img
        className={className}
        src={data.data.art}
        alt=""
        loading="lazy"
        onClick={onClick}
      />
      <div className="p-2 mt-2 items-center justify-center">
        <p className=" font-light text-xs text-white dark:text-gray-400  pl-6">
          {data.data.ability}
        </p>
      </div>
    </div>
  );
};

export default Card;

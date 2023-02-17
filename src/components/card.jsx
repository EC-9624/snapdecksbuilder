import React from "react";

const Card = (data) => {
  console.log(data);
  return (
    <div className="w-40 h-64 mb-10 flex-col">
      <img
        className="rounded-t-lg grayscale"
        src={data.data.art}
        alt=""
        loading="lazy"
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

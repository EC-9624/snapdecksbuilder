import React from "react";

const Card = ({ data }) => {
  const { art, ability } = data;
  return (
    <div className="w-56 h-96 bg-slate-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={art} alt="" />
      <div className="p-2">
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
          {ability}
        </p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./card";

function Builder() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 p-8 border-4 border-gray-500 rounded-lg bg-black mb-4 max-w-fit">
      <div className="bg-gray-100 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-200 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-300 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-400 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-500 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-600 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-700 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-orange-300 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-gray-900 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-red-500 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-green-500 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
      <div className="bg-blue-500 h-32 w-24 border-solid border-4 border-yellow-500 rounded "></div>
    </div>
  );
}

export default Builder;

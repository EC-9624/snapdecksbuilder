import React from "react";

const Search = () => {
  return (
    <div className=" h-64 w-fit bg-orange-500 p-2 border-2 rounded">
      <h1>Search a Card</h1>
      <input
        type="text"
        className="border-2 rounded-md border-blue-400 "
        placeholder="Search..."
      />

      <div className="min-w-fit">
        <h2>Ability</h2>
        <input type="text" placeholder="Ability" className="" />
      </div>
      <div className="min-w-fit">
        <h2>Source/Pool</h2>
        <input type="text" placeholder="Source/Pool" className="" />
      </div>
      <div>
        <h2>Cost</h2>
      </div>
      <div>Power</div>
    </div>
  );
};

export default Search;

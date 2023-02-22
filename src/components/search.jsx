import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [costFilter, setCostFilter] = useState(null);

  const handleSearchInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    props.updateFilteredState(
      newSearchTerm,
      filterValue,
      sourceFilter,
      costFilter
    );
  };

  const handleFilterInputChange = (event) => {
    const newFilterTerm = event.target.value;
    setFilterValue(newFilterTerm);
    props.updateFilteredState(
      searchTerm,
      newFilterTerm,
      sourceFilter,
      costFilter
    );
  };

  const handleSourceInputChange = (event) => {
    const newSource = event.target.value;
    setSourceFilter(newSource);
    props.updateFilteredState(searchTerm, filterValue, newSource, costFilter);
  };

  const handleCostFilterClick = (cost) => {
    setCostFilter(cost);
    props.updateFilteredState(searchTerm, filterValue, sourceFilter, cost);
  };

  return (
    <div className="text-white text-xl font-bold flex flex-col border-2 p-4 w-fit rounded">
      <div className="flex gap-10">
        <div className="text-orange-500">
          <h1>Keyword</h1>
          <input
            type="search"
            name="search-form"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="text-orange-600">
          <h1>Ability</h1>
          <select
            name="ability"
            value={filterValue}
            onChange={handleFilterInputChange}
            className="font-semibold"
          >
            <option value="">All</option>
            <option value="On Reveal">On Reveal</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Discard">Discard</option>
            <option value="Destroy">Destroy</option>
            <option value="Draw">Draw</option>
          </select>
        </div>

        <div className="text-orange-500 ">
          <h1>Source</h1>
          <select
            name="source"
            value={sourceFilter}
            onChange={handleSourceInputChange}
            className="font-semibold"
          >
            <option value="">All</option>
            <option value="starter-card">starter</option>
            <option value="pool-1">pool-1</option>
            <option value="pool-2">pool-2</option>
            <option value="pool-3">pool-3</option>
            <option value="pool-4">pool-4</option>
            <option value="pool-5">pool-5</option>
          </select>
        </div>
      </div>
      <div>
        <h1>Cost</h1>
        <div className=" w-fit flex gap-2">
          <button
            className="bg-fuchsia-400 "
            onClick={() => handleCostFilterClick()}
          >
            All
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(0)}
          >
            0
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(1)}
          >
            1
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(2)}
          >
            2
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(3)}
          >
            3
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(4)}
          >
            4
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(5)}
          >
            5
          </button>
          <button
            className="bg-fuchsia-400"
            onClick={() => handleCostFilterClick(6)}
          >
            6+
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [costFilter, setCostFilter] = useState(null);
  const [powerFilter, setPowerFilter] = useState(null);
  const [selectedcostButton, setSelectedcostButton] = useState(null);
  const [selectedPower, setSelectPower] = useState(null);

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
      costFilter,
      powerFilter
    );
  };

  const handleSourceInputChange = (event) => {
    const newSource = event.target.value;
    setSourceFilter(newSource);

    props.updateFilteredState(
      searchTerm,
      filterValue,
      newSource,
      costFilter,
      powerFilter
    );
  };

  const handleCostFilterClick = (cost) => {
    setCostFilter(cost);
    setSelectedcostButton(cost);

    props.updateFilteredState(
      searchTerm,
      filterValue,
      sourceFilter,
      cost,
      powerFilter
    );
  };

  const handlePowerFilterClick = (power) => {
    setPowerFilter(power);
    setSelectPower(power);

    props.updateFilteredState(
      searchTerm,
      filterValue,
      sourceFilter,
      costFilter,
      power
    );
  };

  const cost = [null, 0, 1, 2, 3, 4, 5, 6];
  const power = [null, 0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bg-slate-900 text-white text-xl font-bold flex flex-col border-2 border-zinc-400 p-8 mb w-fit rounded-xl mb-8">
      <div className="flex gap-5">
        <div className="mb-2">
          <h1 className="mb-2">Name</h1>
          <input
            type="search"
            name="search-form"
            className="bg-gray-600 pl-2 placeholder-white placeholder-opacity-75"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="mb-2">
          <h1 className="mb-2">Ability</h1>
          <select
            name="ability"
            value={filterValue}
            onChange={handleFilterInputChange}
            className="font-semibold bg-gray-600 cursor-pointer"
          >
            <option value="">All</option>
            <option value="On Reveal">On Reveal</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Discard">Discard</option>
            <option value="Destroy">Destroy</option>
            <option value="Draw">Draw</option>
          </select>
        </div>

        <div className="mb-2 ">
          <h1 className="mb-2">Source</h1>
          <select
            name="source"
            value={sourceFilter}
            onChange={handleSourceInputChange}
            className="font-semibold bg-gray-600 cursor-pointer"
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
      <div className="flex gap-5">
        <div>
          <h1>Cost</h1>
          <div className=" w-fit flex gap-1">
            {cost.map((item, i) => {
              return (
                <button
                  className={
                    selectedcostButton == item
                      ? "bg-blue-400 border-2 rounded-full h-10 w-10"
                      : "bg-gray-600 border-2 rounded-full h-10 w-10"
                  }
                  onClick={() => handleCostFilterClick(item)}
                  key={i}
                >
                  {item === null ? "All" : item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h1>Power</h1>
          <div className=" w-fit flex gap-1">
            {power.map((item, i) => {
              return (
                <button
                  className={
                    selectedPower == item
                      ? "bg-orange-400 border-2 rounded-md h-10 w-10"
                      : "bg-gray-600 border-2 rounded-md h-10 w-10"
                  } //"bg-gray-600 border-2 rounded-md h-10 w-10"
                  onClick={() => handlePowerFilterClick(item)}
                  key={i}
                >
                  {item === null
                    ? "All"
                    : item && item == 0
                    ? ">1"
                    : item && item === 7
                    ? "7+"
                    : item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

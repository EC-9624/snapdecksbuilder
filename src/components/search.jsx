import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");

  const handleSearchInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    props.updateFilteredState(newSearchTerm, filterValue, sourceFilter);
  };

  const handleFilterInputChange = (event) => {
    const newFilterTerm = event.target.value;
    setFilterValue(newFilterTerm);
    props.updateFilteredState(searchTerm, newFilterTerm, sourceFilter);
  };

  const handleSourceInputChange = (event) => {
    const newSource = event.target.value;
    setSourceFilter(newSource);
    props.updateFilteredState(searchTerm, filterValue, newSource);
  };
  return (
    <div className="text-white flex flex-col  border-4 p-4 w-fit">
      <div className="flex gap-2">
        <div>
          <h1>Keyword</h1>
          <input
            type="search"
            name="search-form"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="text-orange-500"
          />
        </div>

        <div className="text-orange-600">
          <h1>Ability</h1>
          <select
            name="ability"
            value={filterValue}
            onChange={handleFilterInputChange}
          >
            <option value="">All</option>
            <option value="On Reveal">On Reveal</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Discard">Discard</option>
            <option value="Destroy">Destroy</option>
            <option value="Draw">Draw</option>
          </select>
        </div>

        <div>
          <h1>Source</h1>
          <select
            name="source"
            value={sourceFilter}
            onChange={handleSourceInputChange}
            className="text-orange-500"
          >
            <option value="">All</option>
            <option value="pool-1">pool-1</option>
            <option value="pool-2">pool-2</option>
            <option value="pool-3">pool-3</option>
            <option value="pool-4">pool-4</option>
            <option value="pool-5">pool-5</option>
          </select>
        </div>
      </div>
      {/* <div className="flex gap-6">
        <div>
          <h2>Power</h2>
          <div></div>
        </div>

        <div>
          <h2>Cost</h2>
          <div></div>
        </div>
      </div> */}
    </div>
  );
};

export default Search;

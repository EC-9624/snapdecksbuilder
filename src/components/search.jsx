import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearchTermChange(event.target.value);
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
            onChange={handleInputChange}
            className="text-orange-500"
          />
        </div>

        <div>
          <h1>Ability</h1>
          <input type="text" placeholder="Search..." />
        </div>

        {/* <div>
          <h1>Source</h1>
          <input type="text" placeholder="Source..." />
        </div>

      </div>
      <div className="flex gap-6">
        <div>
          <h2>Power</h2>
          <div></div>
        </div>

        <div>
          <h2>Cost</h2>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default Search;

import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your items"
      />
    </form>
  );
};

export default SearchItem;

import React, { useEffect, useState, useCallback } from "react";

const Search = ({ filterString }) => {
  const [searchVal, setSearchVal] = useState("");

  const searchChangeHandler = (event) => {
    setSearchVal(event.target.value);
  };

  const filterStringMemoized = useCallback(
    (value) => {
      filterString(value);
    },
    [filterString]
  );

  useEffect(() => {
    filterStringMemoized(searchVal);
  }, [searchVal, filterStringMemoized]);

  return (
    <>
      <input
        type="text"
        id="search"
        name="search"
        value={searchVal}
        placeholder="Search"
        onChange={searchChangeHandler}
      />
    </>
  );
};

export default Search;

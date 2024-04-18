import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <div className="relative  -top-16 flex justify-center  ">
      <form>
        <input
          type="text"
          placeholder="Search ToDo"
          onSubmit={(e) => e.preventDefault}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="text-center p-1 w-80 lg:w-96 rounded-full drop-shadow-lg "
        />
      </form>
    </div>
  );
};

export default SearchItem;

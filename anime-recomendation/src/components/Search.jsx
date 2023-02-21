import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Do something with the search term
    console.log(searchTerm);
  };

  return (
    <div className="flex items-center justify-center py-5 my-5">
      <form className="relative w-full max-w-md" onSubmit={handleSearch}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            id="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="absolute top-0 right-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

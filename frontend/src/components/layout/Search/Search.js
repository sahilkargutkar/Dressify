import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchInput = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <>
      <form
        class="font-sans text-black min-h-screen bg-white flex items-center justify-center"
        onSubmit={searchInput}
      >
        <div class="border rounded overflow-hidden flex">
          <input
            type="text"
            class="px-4 py-2"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="submit"
            class="flex items-center justify-center px-4 border-l"
            onClick
          >
            <svg
              class="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;

import React, { useEffect, useState } from "react";

function SearchPage({ activeUser, favorites }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2 className="text-center">Welcome: {activeUser}</h2>
      <div className="flex gif-form">
        <input
          id="query"
          placeholder="Search for a gif"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={() => setSearch(query)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchPage;
//! res.data is the actual gifs
//! For each gif we need:
//! {
//!     id: gif.id,
//!     title: gif.title,
//!     url: gif.images.original.url
//! }

let res = {
  data: [
    {
      id: "3oeHLrjZGBgnPx5VII",
      title: "Bbc One Bear GIF by BBC",
      images: {
        original: {
          url: "https://media4.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
        },
      },
    },
  ],
};

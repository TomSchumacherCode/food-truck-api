import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function SearchPage({ activeUser, favorites }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { data, error, loading } = useFetch(search);

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

import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import GifDisplay from "./GifDisplay";

function SearchPage({ activeUser, favorites, addFavorite, removeFavorite }) {
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
      {loading && <div>Loading</div>}
      {error && !loading && <h2>Something went wrong</h2>}
      {data && !loading && (
        <div className="flex">
          {data.map((val) => (
            <GifDisplay
              key={val.id}
              gif={val}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

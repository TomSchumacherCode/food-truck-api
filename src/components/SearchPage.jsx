import React, { useMemo, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import GifDisplay from "./GifDisplay";

function SearchPage({ activeUser, favorites, addFavorite, removeFavorite }) {
  const searchInput = useRef(null);
  const [search, setSearch] = useState("");
  const { data, error, loading } = useFetch(search);
  const faveIds = useMemo(() => favorites.map((val) => val.id), [favorites]);

  return (
    <div>
      <h2 className="text-center">Welcome: {activeUser}</h2>
      <div className="flex gif-form">
        <input id="query" placeholder="Search for a gif" ref={searchInput} />
        <button
          className="search-btn"
          onClick={() => {
            setSearch(searchInput.current.value);
          }}
        >
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
              isFavorite={faveIds.includes(val.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

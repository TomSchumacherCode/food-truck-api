import React, { useMemo, useRef, useState } from "react";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
import GifDisplay from "./GifDisplay";
import { setSearch, addFavorite, removeFavorite } from "../redux/actions";

function SearchPage({
  user,
  favorites,
  setSearch,
  search,
  addFavorite,
  removeFavorite,
}) {
  const searchInput = useRef(null);
  const [query, setQuery] = useState("");
  const { data, error, loading } = useFetch(query);
  const faveIds = useMemo(() => favorites.map((val) => val.id), [favorites]);

  return (
    <div>
      <h2 className="text-center">Welcome: {user}</h2>
      <div className="flex gif-form">
        <input id="query" placeholder="Search for a gif" ref={searchInput} />
        <button
          className="search-btn"
          onClick={() => {
            setQuery(searchInput.current.value);
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favorites: state.gifs.favorites,
    search: state.gifs.search,
  };
};

const mapDispatchToProps = {
  setSearch,
  addFavorite,
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

import React from "react";
import GifDisplay from "./GifDisplay";

function FavoritesPage({ favorites, removeFavorite }) {
  return (
    <div>
      <div className="flex">
        {favorites.map((val) => (
          <GifDisplay
            key={val.id}
            gif={val}
            removeFavorite={removeFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;

import React from "react";
import GifDisplay from "./GifDisplay";
import { removeFavorite } from "../redux/actions";
import { connect } from "react-redux";

function FavoritesPage({ favorites, removeFavorite, user }) {
  return (
    <div>
      <h3>Favorites for {user}</h3>
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

const mapStateToProps = (state) => {
  return { user: state.user, favorites: state.gifs.favorites };
};

const mapDispatchToProps = {
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

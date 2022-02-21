export const ADD_FAVORITE = "Add Favorite";
export const REMOVE_FAVORITE = "Remove Favorite";
export const SET_SEARCH = "Set Search";
export const CLEAR_GIFS = "Clear Gifs";

export const addFavorite = (gif) => {
  return { type: ADD_FAVORITE, gif };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, id };
};

export const setSearch = (results) => {
  return { type: SET_SEARCH, results };
};

export const clearGifs = () => {
  return { type: CLEAR_GIFS };
};

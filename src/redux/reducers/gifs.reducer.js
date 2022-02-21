import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_GIFS,
  SET_SEARCH,
} from "../actions";

const initialState = {
  search: [],
  favorites: [],
};

export default function gifsReducer(state, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      //! Keep search in tact, create a new array with the new gif added to it
      return { ...state, favorites: [...state.favorites, action.gif] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((val) => val.id !== action.id),
      };
    case CLEAR_GIFS:
      return { ...state, search: [], favorites: [] };
    case SET_SEARCH:
      return { ...state, search: action.results };
    default:
      return state;
  }
}

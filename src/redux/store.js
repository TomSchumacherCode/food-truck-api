import { createStore } from "redux";
import rootReducer from "./reducers";

const INITIAL_STATE = {
  user: null,
  gifs: {
    favorites: [],
    search: [],
  },
};

export default createStore(rootReducer, INITIAL_STATE);

import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import gifsReducer from "./gifs.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  gifs: gifsReducer,
});

export default rootReducer;

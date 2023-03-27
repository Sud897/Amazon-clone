import { combineReducers } from "redux";
import { movieReducers } from "./movie-reducer";

export const rootReducers = combineReducers({
  movie: movieReducers,
});

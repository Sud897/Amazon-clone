import {
  ADD_TO_WATCHLIST,
  FETCH_ALL_MOVIES,
  FETCH_ALL_WATCHLIST_MOVIES,
  FETCH_MOVIE_DETAIL,
  REMOVE_FROM_WATCHLIST,
  SEARCH_MOVIES,
  TOGGLE_LOADING,
  FETCH_ALL_CONTINUE_WATCHING_MOVIES,
  REMOVE_FROM_CONTINUE_WATCH_MOVIES,
  ADD_TO_CONTINUE_WATCHING,
} from "../actions/movie-action";

const initialMoviesState = {
  listOfMovies: [],
  englishMoviesList: [],
  hindiMoviesList: [],
  dramaMoviesList: [],
  actionMoviesList: [],
  adventureMoviesList: [],
  romanticMoviesList: [],
  comedyMoviesList: [],
  suspenseMoviesList: [],
  horrorMoviesList: [],
  listOfWatchListMovies: [],
  listOfContinueWatchingMovies: [],
  loading: true,
  isAddedToWatchList: false,
  movieDetail: {},
  searchMoviesList: [],
};

export const movieReducers = (state = initialMoviesState, action) => {
  switch (action.type) {
    // fetch all movies part
    case FETCH_ALL_MOVIES:
      const englishMovies = action.payload.filter(
        (movie) => movie["audio-lang"] === "English"
      );
      const hindiMovies = action.payload.filter(
        (movie) => movie["audio-lang"] === "Hindi"
      );
      const dramaMovies = action.payload.filter(function (movie) {
        var genres = movie["genres"].split(",");
        for (var i = 0; i < genres.length; i++) {
          if (genres[i].trim() === "Drama") {
            return true;
          }
        }
      });
      // const dramaMovies = action.payload.filter(
      //   (movie) =>
      //     movie["genres"].split(",").find((str) => str.trim() === "Drama") ===
      //     "Drama"
      // );
      const actionMovies = action.payload.filter(
        (movie) =>
          movie["genres"].split(",").find((str) => str.trim() === "Action") ===
          "Action"
      );
      const adventureMovies = action.payload.filter(
        (movie) =>
          movie["genres"]
            .split(",")
            .find((str) => str.trim() === "Adventure") === "Adventure"
      );
      const romanticMovies = action.payload.filter(
        (movie) =>
          movie["genres"].split(",").find((str) => str.trim() === "Romance") ===
          "Romance"
      );
      const comedyMovies = action.payload.filter(
        (movie) =>
          movie["genres"].split(",").find((str) => str.trim() === "Comedy") ===
          "Comedy"
      );
      const suspenseMovies = action.payload.filter(
        (movie) =>
          movie["genres"]
            .split(",")
            .find((str) => str.trim() === "Suspense") === "Suspense"
      );
      const horrorMovies = action.payload.filter(
        (movie) =>
          movie["genres"].split(",").find((str) => str.trim() === "Horror") ===
          "Horror"
      );
      return {
        ...state,
        listOfMovies: [...action.payload],
        englishMoviesList: englishMovies,
        hindiMoviesList: hindiMovies,
        dramaMoviesList: dramaMovies,
        actionMoviesList: actionMovies,
        adventureMoviesList: adventureMovies,
        romanticMoviesList: romanticMovies,
        comedyMoviesList: comedyMovies,
        suspenseMoviesList: suspenseMovies,
        horrorMoviesList: horrorMovies,
        loading: false,
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: { ...action.payload },
      };

    // search movie part

    case SEARCH_MOVIES:
      return {
        ...state,
        searchMoviesList: state.listOfMovies.filter((movie) =>
          movie["movie-name"]
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ),
      };

    // watchlist movie part

    case FETCH_ALL_WATCHLIST_MOVIES:
      return {
        ...state,
        listOfWatchListMovies: action.payload,
      };

    case ADD_TO_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: [action.payload, ...state.listOfWatchListMovies],
        isAddedToWatchList: true,
      };

    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: state.listOfWatchListMovies.filter(
          (movie) => movie["watchlist_movie_id"] !== action.payload
        ),
        isAddedToWatchList: false,
      };

    // continue watching movies part
    case FETCH_ALL_CONTINUE_WATCHING_MOVIES:
      return {
        ...state,
        listOfContinueWatchingMovies: [...action.payload],
      };

    case ADD_TO_CONTINUE_WATCHING:
      return {
        ...state,
        listOfContinueWatchingMovies: [
          ...state.listOfContinueWatchingMovies,
          action.payload,
        ],
      };

    case REMOVE_FROM_CONTINUE_WATCH_MOVIES:
      return {
        ...state,
        listOfContinueWatchingMovies: state.listOfContinueWatchingMovies.filter(
          (movie) => movie["continue_watching_movie_id"] !== action.payload
        ),
      };

    default:
      return state;
  }
};

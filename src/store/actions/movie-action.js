// action types
export const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const FETCH_ALL_WATCHLIST_MOVIES = "FETCH_ALL_WATCHLIST_MOVIES";
export const TOGGLE_LOADING = "SET_LOADING";
export const FETCH_MOVIE_DETAIL = "FETCH_MOVIE_DETAIL";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const REMOVE_FROM_CONTINUE_WATCH_MOVIES =
  "REMOVE_FROM_CONTINUE_WATCH_MOVIES";
export const FETCH_ALL_CONTINUE_WATCHING_MOVIES =
  "FETCH_ALL_CONTINUE_WATCHING_MOVIES";
export const ADD_TO_CONTINUE_WATCHING = "ADD_TO_CONTINUE_WATCHING";
// action creators

export const fetchMovies = (movies) => {
  return {
    type: FETCH_ALL_MOVIES,
    payload: movies,
  };
};

export const fetchMovieDetail = (movie) => {
  return {
    type: FETCH_MOVIE_DETAIL,
    payload: movie,
  };
};

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const fetchWatchlist = (movies) => {
  return {
    type: FETCH_ALL_WATCHLIST_MOVIES,
    payload: movies,
  };
};

export const addToWatchlist = (movie) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

export const removeFromWatchlist = (id) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: id,
  };
};

export const searchMovies = (data) => {
  return {
    type: SEARCH_MOVIES,
    payload: data,
  };
};

export const fetchContinueWatchingMovies = (movies) => {
  return {
    type: FETCH_ALL_CONTINUE_WATCHING_MOVIES,
    payload: movies,
  };
};

export const addToContinueWatchingMovies = (movie) => {
  return {
    type: ADD_TO_CONTINUE_WATCHING,
    payload: movie,
  };
};

export const removeFromContinueWatching = (id) => {
  return {
    type: REMOVE_FROM_CONTINUE_WATCH_MOVIES,
    payload: id,
  };
};

// asyn action function
export const handleFetchMovies = () => {
  const url = "https://movie-78f07-default-rtdb.firebaseio.com/movies.json";
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movies = [];
      const res = await fetch(url);
      const data = await res.json();
      for (const key in data) {
        movies.push({ _id: key, ...data[key] });
      }
      dispatch(toggleLoading());
      dispatch(fetchMovies(movies));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const handleFetchMovieDetail = (id) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/movies/${id}.json`;
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch the data from api!");
      }
      const movie = await res.json();
      dispatch(toggleLoading());
      dispatch(fetchMovieDetail(movie));
    } catch (error) {
      console.log(error.message);
    }
  };
};

//function to fetch all watchlist movies
export const handleFetchWatchlist = (userId) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/watchlist/${userId}.json`;
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch all watchlisht movies");
      }
      const data = await response.json();
      const movies = [];
      for (const key in data) {
        movies.push({ watchlist_movie_id: key, ...data[key] });
      }
      dispatch(toggleLoading());
      dispatch(fetchWatchlist(movies));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const handleAddToWatchlist = (userId,movie) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/watchlist/${userId}.json`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error("Failed to add to watchlist");
      }
      const data = await response.json();
      const newWatchlist = { watchlist_movie_id: data.name, ...movie };
      dispatch(addToWatchlist(newWatchlist));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const handleDeleteFromWatchlist = (userId,watchlistMovieId) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/watchlist.json/${userId}/${watchlistMovieId}.json`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove from watchlist");
      }
      dispatch(removeFromWatchlist(watchlistMovieId));
    } catch (error) {
      console.log(error.message);
    }
  };
};

//function for continue watching movies
export const FetchContinueWatchingMoviesHandler = (userId) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/continue-watching/${userId}.json`;
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movies = [];
      const res = await fetch(url);
      const data = await res.json();
      for (const key in data) {
        movies.push({ continue_watching_movie_id: key, ...data[key] });
      }
      dispatch(fetchContinueWatchingMovies(movies));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addToContinueWatchingMoviesHandler = (userId, movie) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/continue-watching/${userId}.json`;
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movie),
      });
      if (!res.ok) {
        throw new Error("Failed to add to continue watching");
      }
      const data = await res.json();
      const newMovie = { continue_watching_movie_id: data.name, ...movie };
      dispatch(addToContinueWatchingMovies(newMovie));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const removeFromContinueWatchingHandler = (userId, continueWatchingMovieId) => {
  const url = `https:/movie-78f07-default-rtdb.firebaseio.com/continue-watching/${userId}/${continueWatchingMovieId}.json`;
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to remove continue watching");
      }
      dispatch(removeFromContinueWatching(continueWatchingMovieId));
    } catch (error) {
      console.log(error.message);
    }
  };
};

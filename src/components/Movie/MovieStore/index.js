import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchContinueWatchingMoviesHandler,
  handleFetchMovies,
} from "../../../store/actions/movie-action";
import { useAuth } from "../../../store/AuthProvider";
import MediaScreen from "../../MediaScreen/MediaScreen";
import ContinueWatchList from "../../ContinueWatch/ContinueWatchList";
// import Slick from "../../MediaScreen/slick";
const MovieStore = () => {
  const {
    listOfContinueWatchingMovies,
    englishMoviesList,
    hindiMoviesList,
    dramaMoviesList,
    actionMoviesList,
    romanticMoviesList,
    comedyMoviesList,
    // adventureMoviesList,
    // suspenseMoviesList,
    // horrorMoviesList,
  } = useSelector((state) => state.movie);
  const { user } = useAuth();
  const { uid } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchMovies());
    dispatch(FetchContinueWatchingMoviesHandler(uid));
  }, [dispatch, uid]);

  return (
    <div>
      {listOfContinueWatchingMovies.length > 0 && (
        <ContinueWatchList
          heading="Continue Watching"
          id="watched"
          movies={listOfContinueWatchingMovies}
        />
      )}

      {englishMoviesList.length > 0 && (
        <MediaScreen
          heading="English Movies"
          id="english-movie-list"
          movies={englishMoviesList}
        />
      )}
      {/* {englishMoviesList.length > 0 && (
        <Slick
          // heading="English Movies"
          // id="english-movie-list"
          movies={englishMoviesList}
        />
      )} */}

      {hindiMoviesList.length > 0 && (
        <MediaScreen
          heading="Hindi Movies"
          id="hindi-movie-list"
          movies={hindiMoviesList}
        />
      )}
      {romanticMoviesList.length > 0 && (
        <MediaScreen
          heading="Romantic Movies"
          id="romantic-movie-list"
          movies={romanticMoviesList}
        />
      )}
      {dramaMoviesList.length > 0 && (
        <MediaScreen
          heading="Drama Movies"
          id="drama-movie-list"
          movies={dramaMoviesList}
        />
      )}
      {comedyMoviesList.length > 0 && (
        <MediaScreen
          heading="Comedy Movies"
          id="comedy-movie-list"
          movies={comedyMoviesList}
        />
      )}
      {actionMoviesList.length > 0 && (
        <MediaScreen
          heading="Action Movies"
          id="action-movie-list"
          movies={actionMoviesList}
        />
      )}
      {/* {horrorMoviesList.length > 0 && (
        <MediaScreen
          heading="Horror Movies"
          id="horror-movie-list"
          movies={horrorMoviesList}
        />
      )} */}
      {/* {suspenseMoviesList.length > 0 && (
        <MediaScreen
          heading="Suspense Movies"
          id="suspense-movie-list"
          movies={suspenseMoviesList}
        />
      )} */}
      {/* {adventureMoviesList.length > 0 && (
        <MediaScreen
          heading="Adventure Movies"
          id="adventure-movie-list"
          movies={adventureMoviesList}
        />
      )} */}
    </div>
  );
};

export default MovieStore;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./WatchListMovies.module.css";
import emptyWatchList from "../../assets/empty_watchlist.png";
import WatchListCard from "./WatchListCard";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchWatchlist } from "../../store/actions/movie-action";
import { useAuth } from "../../store/AuthProvider";
const WatchListMovies = () => {
  const { user } = useAuth();
  const { listOfWatchListMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchWatchlist(user.uid));
  }, [listOfWatchListMovies]);
  return (
    <div className={styles.WatchListContainer}>
      {listOfWatchListMovies?.length > 0 ? (
        <div className={styles["watchlist-card-container"]}>
          <WatchListCard movies={listOfWatchListMovies} />
        </div>
      ) : (
        <div className={styles.emptyWatchListContainer}>
          <img
            src={emptyWatchList}
            alt="empty-watchlist"
            className={styles.emptyWatchListImg}
          />
          <div className={styles.emptyMsg}>
            You have no TV shows on Your Watchlist
          </div>
          <div className={styles.instruction}>
            Add <Link to="/">TV shows</Link> and <Link to="/">Movies</Link> that
            you want to watch later by clicking Add to Watchlist.
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchListMovies;

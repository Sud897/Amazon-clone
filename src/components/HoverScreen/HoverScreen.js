import React, { useState } from "react";
import styles from "./HoverScreen.module.css";
import prime from "../../assets/logo/prime.svg";
import { useNavigate, useParams } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import video from "../../assets/Intro video/Prime-Intro.mp4";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../store/AuthProvider";
import { addToContinueWatchingMoviesHandler } from "../../store/actions/movie-action";
import {
  handleAddToWatchlist,
  handleDeleteFromWatchlist,
} from "../../store/actions/movie-action";
const HoverScreen = ({ movie, id }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAddedToWatchList}=useSelector(state=>state.movie)
  const { user } = useAuth();
  console.log(movie)
  const handleClick = () => {
    return navigate(`/movie/detail/${movie["_id"]}`);
  };
  const moviePlayHandler = (event) => {
    event.stopPropagation();
    dispatch(
      addToContinueWatchingMoviesHandler(user.uid, { ...movie})
    );
    navigate("/player", { state: { link: movie?.["link"] } });
  };
  const addToWatchlistHandler = (event) => {
    event.stopPropagation();
    dispatch(handleAddToWatchlist(user.uid, { ...movie }));
  };
  const removeFromWatchlistHandler = (event, id) => {
    event.stopPropagation();
    dispatch(handleDeleteFromWatchlist(user.uid, id));
  };

  return (
    <div className={styles.hoverScreen} onClick={handleClick}>
      <img src={prime} alt="logo" className={styles.mediaHoverPrimeImg} />
      <HoverVideoPlayer
        videoSrc={video}
        focused={isVideoPlaying}
        onHoverStart={() => setIsVideoPlaying(!isVideoPlaying)}
        loop={true}
      />

      <div className={styles.hoverData}>
        <div className={styles.buttonContainer}>
          <div className={styles.playDiv}>
            <button className={styles.button} onClick={moviePlayHandler}>
              <div className={styles.play}></div>
            </button>
            <div className={styles.playtext}>Play</div>
          </div>
          <div className={styles.watchlistButton}>
            {!isAddedToWatchList && (
              <div onClick={addToWatchlistHandler}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <title>Add to Watchlist</title>
                  <path
                    d="M3 12h18m-9 9V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            )}
            {isAddedToWatchList && (
              <div onClick={() => removeFromWatchlistHandler(id)}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Remove from Watchlist</title>
                  <path
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    d="M3,4 L9,4 C9.55228,4 10,3.55228 10,3 C10,2.44772 9.55228,2 9,2 L4,2 C2.89543,2 2,2.89543 2,4 L2,12 C2,13.1046 2.89543,14 4,14 L12,14 C13.1046,14 14,13.1046 14,12 L14,10 C14,9.44771 13.5523,9 13,9 C12.4477,9 12,9.44771 12,10 L12,12 L4,12 L4,4 Z M15.2071,2.29289 C14.8166,1.90237 14.1834,1.90237 13.7929,2.29289 L8.5,7.58579 L7.70711,6.79289 C7.31658,6.40237 6.68342,6.40237 6.29289,6.79289 C5.90237,7.18342 5.90237,7.81658 6.29289,8.20711 L7.79289,9.70711 C7.98043,9.89464 8.23478,10 8.5,10 C8.76522,10 9.01957,9.89464 9.20711,9.70711 L15.2071,3.70711 C15.5976,3.31658 15.5976,2.68342 15.2071,2.29289 Z"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className={styles.primeText}>Included with Prime</div>
        <div className={styles.title}>{movie?.["movie-name"]}</div>
        <div className={styles.overview}>
          {movie["description"]?.length > 100
            ? movie["description"].substring(0, 100) + "..."
            : movie["description"]}
        </div>
        <div className={styles.footerScreen}>
          <div className={styles.runTime}>{movie["duration"]}</div>
          <div className={styles.releaseYear}>{movie["movie-year"]}</div>
        </div>
      </div>
    </div>
  );
};

export default HoverScreen;

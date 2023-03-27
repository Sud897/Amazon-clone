import React from "react";
import HoverScreen from "../HoverScreen/HoverScreen";
import styles from "./WatchListCard.module.css";
import prime from "../../assets/logo/prime.svg";

const WatchListCard = ({ movies, isAddedToWatchList }) => {
  const setPosition = (id) => {
    let x = document.getElementById(`1${id}`);
    let divItem = document.getElementById(`2${id}`);
    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + "px";
    }
    return divItem.style;
  };
  return (
    <div className={styles.banner} >
      &nbsp;
      {movies.map((movie, index) => {
        return (
          <div key={movie._id} className={styles.watchListCard}>
            <div className={styles.mediaDiv} id={`1${movie._id}`} onMouseEnter={() => setPosition(movie)}>
              <div className={styles.media}>
                <img src={prime} alt="logo" className={styles.mediaHoverPrimeImg} />
                <img src={movie?.["image"]} alt="movie_image" className={styles.movieImg} />
              </div>
              <div className={styles.displayhoverScreen} id={`2${movie._id}`}>
                <HoverScreen id={index} movie={movie} isAddedToWatchList={isAddedToWatchList} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default WatchListCard;

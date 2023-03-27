import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "../Category/CategoryDisplayPage.module.css";
import Navbar from "../Header/Navbar";
import WatchListCard from "../WatchListMovies/WatchListCard";
const CategoryDisplayPage = () => {
  const location = useLocation();
  const {
    englishMoviesList,
    hindiMoviesList,
    dramaMoviesList,
    actionMoviesList,
    adventureMoviesList,
    romanticMoviesList,
    comedyMoviesList,
    suspenseMoviesList,
    horrorMoviesList,
  } = useSelector((state) => state.movie);
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.header}>{location.state.header}</div>
        <div className={styles.horizontalLine}></div>
        <div>
          {location.state.header === "English" && (
            <WatchListCard movies={englishMoviesList} />
          )}
          {location.state.header === "Hindi" && (
            <WatchListCard movies={hindiMoviesList} />
          )}
          {location.state.header === "Drama" && (
            <WatchListCard movies={dramaMoviesList} />
          )}
          {location.state.header === "Action" && (
            <WatchListCard movies={actionMoviesList} />
          )}
          {location.state.header === "Adventure" && (
            <WatchListCard movies={adventureMoviesList} />
          )}
          {location.state.header === "Romance" && (
            <WatchListCard movies={romanticMoviesList} />
          )}
          {location.state.header === "Comedy" && (
            <WatchListCard movies={comedyMoviesList} />
          )}
          {location.state.header === "Suspense" && (
            <WatchListCard movies={suspenseMoviesList} />
          )}
          {location.state.header === "Horror" && (
            <WatchListCard movies={horrorMoviesList} />
          )}
        </div>
      </div>
    </>
  );
};
export default CategoryDisplayPage;

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import WatchListMovies from "../../components/WatchListMovies";
import RentalMovies from "../../components/RentalMovies";
import styles from "./MyStuff.module.css";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../store/AuthProvider";
import { handleFetchWatchlist } from "../../store/actions/movie-action";

const MyStuff = () => {
  const [toggle, setToggle] = useState({
    Showwatchlist: true,
    showPurchase: false,
  });
  const showWatchlistHandler = () =>
    setToggle({
      Showwatchlist: true,
      showPurchase: false,
    });
  const showPurchaselistHandler = () =>
    setToggle({
      Showwatchlist: false,
      showPurchase: true,
    });
  const dispatch = useDispatch();
  const { listOfWatchListMovies } = useSelector((state) => state.movie);
  const { user } = useAuth();
  const { uid } = user;
  console.log(listOfWatchListMovies);

  useEffect(() => {
    dispatch(handleFetchWatchlist(uid));
  }, [uid, dispatch]);

  return (
    <>
      <Navbar />
      <div className={styles.mystaff}>
        <div className={styles.navigation}>
          <span
            className={toggle.Showwatchlist ? styles.active : styles.watchlist}
            onClick={showWatchlistHandler}
          >
            Watchlist
          </span>
          <span
            className={toggle.showPurchase ? styles.active : styles.rental}
            onClick={showPurchaselistHandler}
          >
            Purchases & Rentals
          </span>
        </div>
        {toggle.Showwatchlist && (
          <WatchListMovies movies={listOfWatchListMovies} />
        )}
        {toggle.showPurchase && <RentalMovies />}
      </div>
      <Footer />
    </>
  );
};

export default MyStuff;

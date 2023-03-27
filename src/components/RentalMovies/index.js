import styles from "./RentalMovies.module.css";
import emptyRental from "../../assets/empty_rental.png";

const RentalMovies = () => {
  return (
    <div className={styles.RentalListContainer}>
      <div className={styles.emptyRentalListContainer}>
        <img
          src={emptyRental}
          alt="empty-watchlist"
          className={styles.emptyRentalListImg}
        />
        <div className={styles.emptyMsg}>
          There are no movies in your Purchases & Rentals
        </div>
        <div className={styles.instruction}>
          If videos are missing, make sure that you're signed into the correct
          Amazon account and then{" "}
          <span
            onClick={() => window.location.reload()}
            className={styles.refresh}
          >
            refresh this page
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default RentalMovies;

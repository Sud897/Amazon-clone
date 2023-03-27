import React from "react";
import styles from "./ProductionDetails.module.css";
const ProductionDetails = ({movieDetail}) => {
  return (
    <>
      <p className={styles.moreDetailp}>More Details</p>
      <div className={styles.moreDetailDiv}>
        <div className={styles.producer}>
          <dt>Producers</dt>
          <dd className={styles.castDetailrightsubdivblue}>
            {movieDetail?.['producer']}
          </dd>
        </div>
        <div className={styles.producer}>
          <dt>Studio</dt>
          <dd>Hombale Films and Excel Entertainment Pvt Ltd</dd>
        </div>
        <div className={styles.producer}>
          <dt>Content advisory</dt>
          <dd>Smoking, alcohol use, foul language, violence</dd>
        </div>
        <div className={styles.producer}>
          <dt>Supporting actors</dt>
          <dd className={styles.castDetailrightsubdivblue}>
            Anant Nag, Vasishta N. Simha
          </dd>
        </div>
      </div>
    </>
  );
};
export default ProductionDetails;

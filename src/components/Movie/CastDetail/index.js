import React from "react";
import styles from "./CastDetails.module.css";
const CastDetails = ({ movieDetail }) => {
  return (
    <div className={styles.castDetail}>
      <div className={styles.director}>
        <dt className={styles.castTitle}>Directors</dt>
        <dd className={styles.castDetailrightsubdivblue}>
          {movieDetail?.["director"]}
        </dd>
      </div>

      <div className={styles.starring}>
        <dt className={styles.castTitle}>Starring</dt>
        <dd className={styles.castDetailrightsubdivblue}>
          {movieDetail?.["starring"]}
        </dd>
      </div>

      <div className={styles.genres}>
        <dt className={styles.castTitle}>Genres</dt>

        <dd className={styles.castDetailrightsubdivblue}>
          {movieDetail?.["genres"]}
        </dd>
      </div>

      <div className={styles.subtitle}>
        <dt className={styles.castTitle}>Subtitles</dt>
        <dd>{movieDetail?.["subtitles"]}</dd>
      </div>

      <div className={styles.language}>
        <dt className={styles.castTitle}>Audio Languages</dt>
        <dd>{movieDetail?.["audio-lang"]}</dd>
      </div>
    </div>
  );
};
export default CastDetails;

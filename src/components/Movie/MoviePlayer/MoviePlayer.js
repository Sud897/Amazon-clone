import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import styles from "../MoviePlayer/MoviePlayer.module.css";
const MoviePlayer = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.state.link);
  });
  return (
    <div className={styles["player-wrapper"]}>
      <ReactPlayer
        playing={true}
        controls
        className={styles["react-player"]}
        url={location.state.link}
        width="100%"
        height="600px"
      />
    </div>
  );
};
export default MoviePlayer;

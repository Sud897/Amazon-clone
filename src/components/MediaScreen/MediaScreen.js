import React from "react";
import styles from "./MediaScreen.module.css";
import HoverScreen from "../HoverScreen/HoverScreen";
import prime from "../../assets/logo/prime.svg";
const MediaScreen = ({ movies, id, heading }) => {

  // const [toggelLeftButton, setToggleLeftButton] = useState(false);
  var count = 0;

  const scrollToLeft = () => {
    document.getElementById("bannerDiv" + id).scrollBy({
      left: -800,
    });
    if (count === -5.4) {
      count = -5;
      // setToggleLeftButton(false);
    }
    count++;

    if (count > 0) {
      count = 0;
      // setToggleLeftButton(false);
    }
  };
  const scrollToRight = () => {
    // setToggleLeftButton(true);
    document.getElementById("bannerDiv" + id).scrollBy({
      left: 800,
    });
    count--;
    console.log("RIght count is ", count);
    if (count < -6) {
      count = -6;
    }
  };

  const setPosition = (id) => {
    let x = document.getElementById(`1${id}`);
    let divItem = document.getElementById(`2${id}`);
    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + count * 800 + "px";
    }
    return divItem.style;
  };
  // const shuffleData = (arr) => {
  //   for (var i = arr.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }
  // };
  // if (movies.length > 0) {
  //   shuffleData(movies);
  // }
  return (
    <div className={styles.mediaScreen}>
      <div className={styles.heading}>{heading}</div>
      {/* {toggelLeftButton && ( */}
        <div className={styles.leftIconDiv} onClick={scrollToLeft}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjM3IDE3LjIzN3YtMi40NzRsMTQgMTRjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGExLjc0OCAxLjc0OCAwIDAgMS0yLjQ3NCAwbC0xNC0xNGExLjc0OCAxLjc0OCAwIDAgMSAwLTIuNDc0bDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMCAxIDIuNDc0IDBjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGwtMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+"
            alt="left_Scroll"
            className={styles.leftIcon}
          />
        </div>
      {/* )} */}
      <div className={styles.banner} id={"bannerDiv" + id}>
        &nbsp;
        {movies.map((movie,index) => {
          return (
            <div key={index}>
              <div
                className={styles.mediaDiv}
                id={`1${index}`}
                onMouseEnter={() => {
                  setPosition(index);
                }}
              >
                <div className={styles.media}>
                  <img
                    src={prime}
                    alt="logo"
                    className={styles.mediaHoverPrimeImg}
                  />
                  <img
                    src={movie?.["image"]}
                    alt="movie_image"
                    className={styles.movieImg}
                  />
                </div>

                <div className={styles.displayhoverScreen} id={`2${index}`}>
                  <HoverScreen movie={movie} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rightIconDiv} onClick={scrollToRight}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljc2MyAxNy4yMzd2LTIuNDc0bC0xNCAxNGExLjc0OCAxLjc0OCAwIDAgMCAwIDIuNDc0Yy42ODMuNjg0IDEuNzkuNjg0IDIuNDc0IDBsMTQtMTRhMS43NDggMS43NDggMCAwIDAgMC0yLjQ3NGwtMTQtMTRBMS43NSAxLjc1IDAgMCAwIC43NjMgMy4yMzdsMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+"
          alt="left_Scroll"
          className={styles.rightIcon}
        />
      </div>
    </div>
  );
};

export default MediaScreen;

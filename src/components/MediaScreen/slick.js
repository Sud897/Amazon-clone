import React from "react";
import styles from "./MediaScreen.module.css";
import HoverScreen from "../HoverScreen/HoverScreen";
import prime from "../../assets/logo/prime.svg";
import Slider from "react-slick";
const Slick = ({ movies }) => {
  const settings = {
    className: "center",
    // infinite: true,
    centerPadding: "60px",
    // slidesToShow: 5,
    // slideToScroll: 5,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    // swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };
  const setPosition = (id) => {
    let x = document.getElementById(`1${id}`);
    let divItem = document.getElementById(`2${id}`);
    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + 800 + "px";
    }
    return divItem.style;
  };
  return (
    <div>
      <h2>Swipe To Slide</h2>
      <Slider {...settings}>
        {/* <div className={styles.banner} id={"bannerDiv" + id.toString()}>
          &nbsp; */}
        {movies.map((movie, index) => {
          return (
            <div key={index} id={index}>
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
                  <HoverScreen key={index} movie={movie} />
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </Slider>
    </div>
  );
};
export default Slick;

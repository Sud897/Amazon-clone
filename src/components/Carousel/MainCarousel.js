import React from "react";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../../assets/logo/one.png";
const CaroselData = [
  { src: require("../../assets/Cardion-image/img1.png"), alt: "img1" },
  { src: require("../../assets/Cardion-image/img12.png"), alt: "img12" },
  { src: require("../../assets/Cardion-image/img2.png"), alt: "img2" },
  { src: require("../../assets/Cardion-image/img3.png"), alt: "img3" },
  { src: require("../../assets/Cardion-image/img4.png"), alt: "img4" },
  { src: require("../../assets/Cardion-image/img5.png"), alt: "img5" },
  { src: require("../../assets/Cardion-image/img6.png"), alt: "img6" },
  { src: require("../../assets/Cardion-image/img7.png"), alt: "img7" },
  { src: require("../../assets/Cardion-image/img8.png"), alt: "img8" },
  { src: require("../../assets/Cardion-image/img9.png"), alt: "img9" },
  { src: require("../../assets/Cardion-image/img10.png"), alt: "img10" },
  { src: require("../../assets/Cardion-image/img11.png"), alt: "img11" },
];
export const MainCarousel = (props) => {
  return (
    <Carousel showStatus={false} showThumbs={false}>
      {CaroselData.map((item,index) => {
        return (
          <div key={index}>
            <img src={item.src} alt={item.alt} />
          </div>
        );
      })}
    </Carousel>
  );
};

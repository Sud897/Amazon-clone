import React from "react";
import { MainCarousel } from "../components/Carousel/MainCarousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import HomeContainer from "../components/Home";
import MovieStore from "../components/Movie/MovieStore";
import { useAuth } from "../store/AuthProvider";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      {user && (
        <>
          <MainCarousel />
          <MovieStore style={{ marginBottom: "500px"}} />
        </>
      )}
      {!user && <HomeContainer />}
      <Footer />
    </>
  );
};

export default Home;

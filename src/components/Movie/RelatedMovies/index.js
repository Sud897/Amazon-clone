import React from "react";
import {useSelector} from "react-redux";
import MediaScreen from "../../MediaScreen/MediaScreen";
const RelatedMovieList = ({year}) => {

  const {listOfMovies} = useSelector(state => state.movie);

  const relatedMoviesList = listOfMovies && listOfMovies.filter((movie) => {
    return (movie['movie-year'] >= year-3 && movie['movie-year'] <= year+3)
  })
  
  return <MediaScreen id='related-movie' movies={relatedMoviesList} />;
};
export default RelatedMovieList;

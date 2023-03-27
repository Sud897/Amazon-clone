import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.css';
import cancelImg from '../../assets/cancel-img.png';
import { searchMovies } from '../../store/actions/movie-action';
import { Link } from 'react-router-dom';

const debounce = (func,delay) => {
  let timeOut;
  return function (){
    let context=this;
    let args = arguments;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func.apply(context,args);
    }, delay);
  }
}

const SearchBox = ({handleSearchBox}) => {

  const [searchText , setSearchText] = useState('');

  const handleChange = (e) => setSearchText(e.target.value);

  const dispatch = useDispatch();
  const {searchMoviesList} = useSelector(state => state.movie);
  console.log(searchMoviesList);

  const handleKeyPress = debounce(()=>{
    if(searchText.length>2) {
      dispatch(searchMovies(searchText))
    }
  },500)

  return (
    <>
      <div className={styles['search-box']}>
        <form >
            <input type="text" value={searchText} placeholder="Search" onChange={handleChange} onKeyUp={handleKeyPress} />
        </form>
        <img className={styles['cancel-img']} src={cancelImg} alt="cancel-button" onClick={handleSearchBox} />
      </div>
      {
        searchMoviesList.length > 0 &&
        <div className={styles['suggestion']}>
          <ol>
            {
              searchMoviesList.map((movie,index) => {
                return (
                  <li key={index} onClick={handleSearchBox}>
                    <Link to={`/movie/detail/${movie["_id"]}`}>{movie['movie-name']}</Link>
                  </li>
                )
              })
            }
          </ol>
        </div>
      }
      
    </>
  )
}

export default SearchBox;

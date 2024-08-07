import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMovies, setFilter, setSort } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';
import './MovieList.css'; // Import the CSS file

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { movies, isLoading, isError, filter, sort } = useSelector((state) => state.movies);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('rating');
    const sortParam = params.get('order');

    if (filterParam) {
      dispatch(setFilter(filterParam));
    }

    if (sortParam) {
      dispatch(setSort(sortParam));
    }

    dispatch(fetchMovies());
  }, [dispatch, location.search]);

  const filteredMovies = filter
    ? movies.filter((movie) => movie.rating === parseInt(filter))
    : movies;

  const sortedMovies = sort
    ? filteredMovies.slice().sort((a, b) => {
        if (sort === 'asc') {
          return a.Year - b.Year;
        }
        return b.Year - a.Year;
      })
    : filteredMovies;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movies</p>;

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div data-testid="movie-list" className="movie-grid">
      {sortedMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => handleCardClick(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;

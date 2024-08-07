import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { setFilter, setSort } from '../Redux/MovieReducer/action';
import './SideBar.css';

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { filter, sort } = useSelector((state) => state.movies);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set('rating', value);
    } else {
      params.delete('rating');
    }
    navigate({ search: params.toString() });
    dispatch(setFilter(value));
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set('order', value);
    } else {
      params.delete('order');
    }
    navigate({ search: params.toString() });
    dispatch(setSort(value));
  };

  const renderStars = (rating) => {
    return (
      <>
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </>
    );
  };

  return (
    <div className="sidebar">
      <div className="filter-section">
        <p style={{fontWeight:"bold"}}>Filter by Rating</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} className="rating-label">
            <input
              type="radio"
              name="rating"
              value={rating}
              checked={filter === String(rating)}
              onChange={handleFilterChange}
              className="rating-input"
            />
            {renderStars(rating)}
          </label>
        ))}
      </div>
      <div className="sort-section">
        <p style={{fontWeight:"bold"}}>Sort by Year</p>
        <label className="sort-label">
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sort === 'asc'}
            onChange={handleSortChange}
            className="sort-input"
          />
          Ascending
        </label>
        <label className="sort-label">
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sort === 'desc'}
            onChange={handleSortChange}
            className="sort-input"
          />
          Descending
        </label>
      </div>
    </div>
  );
};

export default SideBar;

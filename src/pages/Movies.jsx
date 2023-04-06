import { useState } from 'react';
import { Link } from 'react-router-dom';
import _debounce from 'debounce';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}`;

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  let value = '';

  const onInputChange = (e) => {
    value = e.target.value;
    setQuery(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}&query=${query}&language=en-US&page=1&include_adult=false`)
      .then(response => response.json())
      .then(films => setFilms(films.results));
  };
  
    return (
      <div>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={_debounce(onInputChange, 300)}
          ></input>
          <button type="submit">Search</button>
        </form>

        <ul>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`${film.id}`} >{film.title || film.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Movies;

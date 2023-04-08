import { useState, useEffect} from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}`;

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleList, setVisibleList] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const query = searchParams.get('query');
  const location = useLocation();

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
    setVisibleList(true);
  };

  useEffect(() => {
    fetch(`${BASE_URL}&query=${query}&language=en-US&page=1&include_adult=false`)
      .then(response => response.json())
      .then(films => setFilms(films.results));
  }, [query]);

  useEffect(() => {
    setVisibleList(true);
  }, []);
  
    return (
      <div>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={onInputChange}
            value={inputValue}
          ></input>
          <button type="submit">Search</button>
        </form>

        <ul>
          {visibleList &&
            query &&
            films.map(film => {
              return (
                <li key={film.id}>
                  <Link to={`${film.id}`} state={{ from: location }}>
                    {film.title || film.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
};

export default Movies;

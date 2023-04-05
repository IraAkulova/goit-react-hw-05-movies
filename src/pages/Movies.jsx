import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'debounce';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}`;

const Movies = ({onSubmit}) => {
    const [films, setFilms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');



    const handleInputChange = e => setSearchQuery(e.currentTarget.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
          return alert('enter search query');
        };
        console.log(searchQuery);
        setSearchQuery(searchQuery);
        reset();
      };

    const reset = () => {
        setSearchQuery('');
    };

    useEffect(() => {
        if (!searchQuery) {
          return;
        };
      fetch(`${BASE_URL}&query=${searchQuery}&language=en-US&page=1&include_adult=false`)
        .then(response => response.json())
        .then(films => setFilms(films.results));
    }, [searchQuery]);

    console.log(films);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleInputChange}
            value={searchQuery}
          ></input>
          <button type="submit">Search</button>
        </form>

        <ul>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`${film.id}`}>{film.title || film.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Movies;

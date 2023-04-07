import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;

const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);
    useEffect(() => {
    fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(films => setFilms(films.results));
    }, []);
    
    return (
      <div>
        <div>
          <h2>Trending today</h2>
          <ul>
            {films.map(film => {
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
      </div>
    );
};

export default Home;
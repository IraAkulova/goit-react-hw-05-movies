import { useState } from 'react';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;

export const Home = () => {

    const [films, setFilms] = useState([]);

    fetch(`${BASE_URL}`)
      .then(response => {
        return response.json();
      })
      .then(films => {
        setFilms(films.results);
      });
    
    return (
      <div>
        <div>
          <h2>Trending today</h2>
          <ul>
            {films.map(film => {
              return (
                <li key={film.id}>
                  <a href={film.poster_path}>{film.title || film.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
};
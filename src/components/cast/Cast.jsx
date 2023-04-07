import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      fetch(`${BASE_URL}/${movieId}/credits?api_key=${KEY}&language=en-US`)
        .then(response => {
          return response.json();
        })
        .then(film => {
          setCast(film.cast);
        });
    }, [movieId]);
    console.log(cast);

    return (
      <div className={css.cast}>
        <ul className={css.castList}>
          {cast?.map(artist => (
            <li key={artist.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${artist.profile_path}`}
                alt={artist.name}
              />
              <p>{artist.name}</p>
              <p>Character: {artist.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};


export default Cast;

import { useParams } from "react-router-dom";

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/find`;

export const MovieDetails = () => {
    const { movieId } = useParams();
    console.log(movieId);
    fetch(
      `${BASE_URL}/imdb_id?api_key=${KEY}&language=en-US&external_source=${movieId}`
    )
      .then(response => {
        return response.json();
      })
      .then(film => {
        console.log(film);
      });
    
    return <div>Film</div>;
};

// https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
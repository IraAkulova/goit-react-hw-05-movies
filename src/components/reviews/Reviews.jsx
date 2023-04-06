import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/${movieId}/reviews?api_key=${KEY}&language=en-US`)
      .then(response => {
        return response.json();
      })
        .then(film => {
          console.log(film);
        setReviews(film.results);
      });
  }, [movieId]);
  console.log(reviews);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, we don't have any reviews </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
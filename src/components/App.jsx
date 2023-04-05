import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import { MovieDetails } from './movieDetails/MovieDetails';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (query !== '') {
        setLoading(true);
      }
      if (images.length !== 0) {
        setLoading(false);
      }
    }, [query, images]);

    // useEffect(() => {
    //   if (!query) {
    //     return;
    //   }

    //   FetchImages(query, page)
    //     .then(imgs => {
    //       if (imgs.hits.length === 0) {
    //         return Promise.reject(
    //           new Error(`Oops, there is no images with tag ${query}`)
    //         );
    //       }
    //       setImages(prevImages => [...prevImages, ...imgs.hits]);
    //     })
    //     .catch(error => setError(error));
    // }, [query, page]);
  
    const formSubmitHandler = ({ searchQuery }) => {
      if (!searchQuery) {
        return;
      }
      if (searchQuery !== query) {
        setPage(1);
        setImages([]);
      }
      setQuery(searchQuery);
    };
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Movies onSubmit={formSubmitHandler} />}
        />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { TrendFilms } from './TrendFilms/TrendFilms';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="trendFilms" element={<TrendFilms />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

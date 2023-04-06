import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
      <div>
      <nav className={css.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default SharedLayout;

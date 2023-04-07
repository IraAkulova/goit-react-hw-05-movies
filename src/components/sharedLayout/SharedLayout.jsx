import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.link}>
          Movies
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default SharedLayout;

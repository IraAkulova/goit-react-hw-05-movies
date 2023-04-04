import { Outlet, Link } from "react-router-dom";

export const Home = () => {
    return (
      <div>
        <Link to="trendFilms"></Link>
        <Outlet />
      </div>
    );
};
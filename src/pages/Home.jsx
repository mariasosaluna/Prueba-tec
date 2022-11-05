import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>DEMO Streaming</h1>
      <h3>Popular Titles</h3>
      <NavLink to="movies" className="movies">
        Movies
      </NavLink>

      <NavLink to="tv-series" className="tv-series">
        Tv Series
      </NavLink>
    </>
  );
};

export default Home;

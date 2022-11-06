import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 md:gap-12 ml-6 md:ml-24 mt-56">
        <div className="bg bg-gray-900">
          <NavLink
            to="movies"
            className="relative text-white font-mono text-2xl w-40 py-20 block"
          >
            Movies
            <img
              className="absolute m-auto top-0 left-0 right-0 bottom-0"
              src="/src/assets/placeholder.png"
            />
          </NavLink>
        </div>
        <div className="bg bg-gray-900">
          <NavLink
            to="tv-series"
            className="relative text-white font-mono text-2xl w-40 py-20 block"
          >
            Tv Series
            <img
              className="absolute m-auto top-0 left-0 right-0 bottom-0"
              src="/src/assets/placeholder.png"
            />
          </NavLink>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default Home;

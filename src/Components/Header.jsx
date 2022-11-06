import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-left z-50">
      <div className="bg-gradient-to-b from-blue-500 to-blue-800 p-4 flex justify-between">
        <NavLink to="/" className="home">
          <h1 className="text-lg md:text-4xl font-bold text-white ">
            Demo Streaming
          </h1>
        </NavLink>
        <div className="flex items-center text-white pr-10 text-md md:text-xl">
          <span>Login</span>
          <span className="bg-slate-700 p-2 ml-6">
            Start your free trial
          </span>
        </div>
      </div>
      <div className="bg-slate-700 p-3 text-white text-md md:text-2xl">
        <h3>Popular Titles</h3>
      </div>
    </div>
  );
};

export default Header;

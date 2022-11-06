import React, { useEffect, useState } from 'react';
import { getData } from '../services/service';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [inputMovies, setInputMovies] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    callMovies();
  }, [inputMovies]);

  const compare = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };

  const callMovies = () => {
    setLoading(true);
    setError(false);

    getData('entries')
      .then((data) => {
        const filterMovies = data.filter((movie) => {
          return (
            movie.programType === 'movie' && movie.releaseYear >= 2010
          );
        });

        const filterByInputMovie = filterMovies.filter((movie) => {
          return (
            movie.title
              .toLowerCase()
              .includes(inputMovies.toLowerCase()) ||
            inputMovies == ''
          );
        });

        setTimeout(() => {
          setLoading(false);
          setMovies(filterByInputMovie.sort(compare).slice(0, 20));
        }, 400);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      <Header />
      <div className="mt-48 p-8 z-0">
        <input
          placeholder="Search movie"
          className="border border-black rounded mb-4 p-1 absolute top-40 left-8"
          type="text"
          value={inputMovies}
          onChange={(e) => {
            setInputMovies(e.target.value);
          }}
        />
        <div className="relative z-0 min-h-screen">
          {loading && !error && <div>Loading...</div>}
          {error && <div>Oops! Something went wrong...</div>}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {movies.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.images['Poster Art'].url}
                    releaseYear={item.releaseYear}
                  />
                );
              })}
              {!movies.length && <div>Movie not found</div>}
            </div>
          )}
        </div>
      </div>
      <div className="left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Movies;

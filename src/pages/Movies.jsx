import React, { useEffect, useState } from 'react';
import { getData } from '../services/service';
import Card from '../Components/Card';
const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    callMovies();
  }, []);

  const compare = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };

  const callMovies = async () => {
    const data = await getData('entries');

    const filterMovies = data.filter((movie) => {
      return (
        movie.programType === 'movie' && movie.releaseYear >= 2010
      );
    });

    setMovies(filterMovies.sort(compare).slice(0, 20));
  };

  return (
    <div>
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
    </div>
  );
};

export default Movies;

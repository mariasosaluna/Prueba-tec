import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../services/service';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const TvSeries = () => {
  const [series, setSeries] = useState([]);
  const [inputSeries, setInputSeries] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    callSeries();
  }, [inputSeries]);

  const compare = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };

  const callSeries = () => {
    setLoading(true);
    setError(false);

    getData('entries')
      .then((data) => {
        const filterSeries = data.filter((serie) => {
          return (
            serie.programType === 'series' &&
            serie.releaseYear >= 2010
          );
        });

        const filterByInputSerie = filterSeries.filter((serie) => {
          return (
            serie.title
              .toLowerCase()
              .includes(inputSeries.toLowerCase()) ||
            inputSeries == ''
          );
        });

        setTimeout(() => {
          setLoading(false);
          setSeries(filterByInputSerie.sort(compare).slice(0, 20));
        }, 400);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      <Header />
      <div className="mt-48 p-8">
        <input
          className="border border-black rounded mb-4 p-1 absolute top-40 left-10"
          placeholder="Search serie"
          type="text"
          value={inputSeries}
          onChange={(e) => {
            setInputSeries(e.target.value);
          }}
        />
        <div className="relative z-0 min-h-screen">
          {loading && !error && <div>Loading...</div>}
          {error && <div>Oops! Something went wrong...</div>}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {series.map((item, index) => {
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
              {!series.length && <div>Serie not found</div>}
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

export default TvSeries;

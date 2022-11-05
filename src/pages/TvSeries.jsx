import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../services/service';
import Card from '../Components/Card';

const TvSeries = () => {
  const [series, setSeries] = useState([]);
  const [inputSeries, setInputSeries] = useState('');

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

  const callSeries = async () => {
    const data = await getData('entries');

    const filterSeries = data.filter((serie) => {
      return (
        serie.programType === 'series' && serie.releaseYear >= 2010
      );
    });

    const filterByInput = filterSeries.filter((serie) => {
      return (
        serie.title
          .toLowerCase()
          .includes(inputSeries.toLowerCase()) || inputSeries == ''
      );
    });

    setSeries(filterByInput.sort(compare).slice(0, 20));
  };

  return (
    <div>
      <input
        type="text"
        value={inputSeries}
        onChange={(e) => {
          setInputSeries(e.target.value);
        }}
      />
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
    </div>
  );
};

export default TvSeries;

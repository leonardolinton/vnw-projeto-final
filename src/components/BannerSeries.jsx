import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '850e4e405a4e2a945faf11cf8ddc1fc3';

const BannerSeries = () => {
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
        );
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const randomSerie = response.data.results[randomIndex];
        setSerie(randomSerie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSerie();
  }, []);

  if (!serie) {
    return <div>Loading...</div>;
  }

  const backgroundImage = `https://image.tmdb.org/t/p/original${serie.backdrop_path}`;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        width: '100%',
      }}
    >
      <h1>{serie.name}</h1>
      <p>{serie.overview}</p>
      <p>Nota: {serie.vote_average}</p>
    </div>
  );
};

export default BannerSeries;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "../styles/BannerStyle";
/*===== Imagens Importadas =====*/
import star from "../assets/icon-star.svg";
import logoIMDB from "../assets/IMDB_logo.png";
import filmRoll from "../assets/film_roll_icon.png"
import play from "../assets/play_icon.png";

const API_KEY = '850e4e405a4e2a945faf11cf8ddc1fc3';

const BannerFilmes = () => {
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const fetchFilme = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
        );
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const randomFilme = response.data.results[randomIndex];
        setFilme(randomFilme);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilme();
  }, []);

  if (!filme) {
    return <div>Loading...</div>;
  }

  const backgroundImage = `https://image.tmdb.org/t/p/original${filme.backdrop_path}`;

  return (
    <S.Banner
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1>{filme.title}</h1>
      <p>Nota: {filme.vote_average}</p>
      <p>{filme.overview}</p>
    </S.Banner>
  );
};

export default BannerFilmes;

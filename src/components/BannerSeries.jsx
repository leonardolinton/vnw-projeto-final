import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "../styles/BannerStyle";
/*===== Imagens Importadas =====*/
import star from "../assets/icon-star.svg";
import logoIMDB from "../assets/IMDB_logo.png";
import filmRoll from "../assets/film_roll_icon.png";
import play from "../assets/play_icon.png";

const API_KEY = '850e4e405a4e2a945faf11cf8ddc1fc3';

const BannerSeries = () => {
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=pt-Br`
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
    <S.Banner
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <S.InfoMovie>
        <S.Titulo>{serie.name}</S.Titulo>
        <S.Nota>
          <img src={star} alt="icone de estrela" />
          <div>
            <p>{serie.vote_average}</p>
            <span>/10</span>
          </div>
          <img src={logoIMDB} alt="" width={40} height={20} />
        </S.Nota>
        <S.Sinopse>{serie.overview}</S.Sinopse>
        <S.Buttons>
        <S.ButtonPlay>
          <a href="">
            <img src={play} alt="" width={15} height={15} />
            Assistir agora
          </a>
        </S.ButtonPlay>
        <S.ButtonTrailer>
          <a href="">
            <img src={filmRoll} alt="" width={15} height={15} />
            Trailer
          </a>
        </S.ButtonTrailer>
      </S.Buttons>
      </S.InfoMovie>
      
    </S.Banner>
  );
};

export default BannerSeries;
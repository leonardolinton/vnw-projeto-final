import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../styles/BannerStyle";
/*===== Imagens Importadas =====*/
import star from "../assets/icon-star.svg";
import logoIMDB from "../assets/IMDB_logo.png";
import filmRoll from "../assets/film_roll_icon.png";
import play from "../assets/play_icon.png";

const API_KEY = import.meta.env.VITE_API_KEY;

const BannerFilmes = () => {
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const fetchFilme = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-Br`
        );
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
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
        <S.InfoMovie>
          <S.Titulo>{filme.title}</S.Titulo>
          <S.Nota>
            <img src={star} alt="icone de estrela" />
            <div>
              <p>{filme.vote_average}</p>
              <span>/10</span>
            </div>
            <img src={logoIMDB} alt="" width={40} height={20} />
          </S.Nota>
          <S.Sinopse>{filme.overview}</S.Sinopse>
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

export default BannerFilmes;

import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import * as S from "../styles/CarrosselStyle";

const CarrosselSeries = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const breakPoints = [
    {width: 400, itemsToShow: 2, showArrows: false},
    {width: 600, itemsToShow: 3, showArrows: false},
    {width: 800, itemsToShow: 5},
  ];

  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=pt-br&page=1`
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setSeries(allApi);
      })
      .catch((error) =>
        alert(`desculpe, você teve um erro de requisição ${error}`)
      );
  };

  return (
    <S.CarouselBox>
    <h2>Últimos lançamentos</h2>
      <Carousel
        breakPoints={breakPoints}
        itemsToScroll={3}
        pagination={false}
        enableAutoPlay
        autoPlaySpeed={2500}
        itemPadding={[20, 10]}
        itemPosition={consts.END}
      >
        {series.map((serie) => (
          <figure>
            <img src={serie.image} style={{ width: "100%", height: "auto"}} />
            <h3>{serie.name}</h3>
            <span>{serie.first_air_date.substring(0, 4)}</span>
            <p>{serie.overview}</p>
          </figure>
        ))}
      </Carousel>
    </S.CarouselBox>
  );
};

export default CarrosselSeries;

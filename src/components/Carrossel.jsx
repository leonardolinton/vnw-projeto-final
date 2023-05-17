import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import * as S from "../styles/CarrosselStyle";

const Carrossel = () => {
   const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false},
    {width: 400, itemsToShow: 2, showArrows: false},
    {width: 500, itemsToShow: 3, showArrows: false},
    {width: 700, itemsToShow: 5},
  ];

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=850e4e405a4e2a945faf11cf8ddc1fc3&language=pt-br&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setFilmes(allApi);
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
        {filmes.map((item) => (
          <figure>
            <img src={item.image} style={{ width: "100%", height: "auto"}} />
            <h3>{item.title}</h3>
          </figure>
        ))}
      </Carousel>
    </S.CarouselBox>
  );
};

export default Carrossel;

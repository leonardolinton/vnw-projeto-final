import { useState, useEffect } from "react";
import * as S from "../styles/ListaFilmeStyle";
import axios from "axios";

export default function ListaFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [input, setInput] = useState("");
  const [filtrados, setFiltrados] = useState([]);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    getFilmes();
    filtar();
  }, [input, filmes, filtrados]);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=850e4e405a4e2a945faf11cf8ddc1fc3&language=pt-Br&page=1"
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

  const filtar = () => {
    const filtros = filmes.filter((item) => {
      if (item.title.toLowerCase().includes(input.toLocaleLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setFiltrados(filtros);
  };

  return (
    <S.FilmesBox>
      <S.Title>Em Alta</S.Title>
      <S.ListaFilmes>
        {filmes.map((item) => (
          <S.Filme>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </S.Filme>
        ))}
      </S.ListaFilmes>
    </S.FilmesBox>
  );
}

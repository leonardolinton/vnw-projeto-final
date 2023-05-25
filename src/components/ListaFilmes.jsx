import React, { useState, useEffect } from "react";
import * as S from "../styles/ListaStyle";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ListaFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR`;
        const params = {
          api_key: apiKey,
          page: currentPage,
        };

        if (searchQuery) {
          url = `https://api.themoviedb.org/3/search/movie`;
          params.query = searchQuery;
        }

        const response = await axios.get(url, { params });
        setFilmes(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchData();
  }, [searchQuery, currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  return (
    <S.Container>
      <S.Cabecalho>
        <S.Titulo>Em Alta</S.Titulo>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </S.Cabecalho>

      <S.BoxLista>
        {filmes.map((filme) => (
          <S.Card key={filme.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
              alt={filme.title}
            />
            <h3>{filme.title}</h3>
            <span>{filme.release_date.substring(0, 4)}</span>
            <p>{filme.overview}</p>
          </S.Card>
        ))}
      </S.BoxLista>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
        previousLabel="<"
        nextLabel=">"
      />
    </S.Container>
  );
};

export default ListaFilmes;

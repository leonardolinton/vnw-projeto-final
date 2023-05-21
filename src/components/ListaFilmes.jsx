import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const ListaFilmes = () => {
    const [filmes, setFilmes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiKey = '850e4e405a4e2a945faf11cf8ddc1fc3';
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
          console.error('Erro ao buscar filmes:', error);
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
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Pesquisar filme por nome"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
  
        {filmes.map((filme) => (
          <div key={filme.id}>
            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
            <h3>{filme.title}</h3>
          </div>
        ))}
  
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
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
          previousLabel="Anterior"
          nextLabel="Próxima"
        />
      </div>
    );
  };
  
  export default ListaFilmes;
  
  
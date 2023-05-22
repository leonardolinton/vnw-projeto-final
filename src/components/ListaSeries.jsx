import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const ListaSeries = () => {
    const [series, setSeries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiKey = import.meta.env.VITE_API_KEY;
          let url = `https://api.themoviedb.org/3/tv/top_rated?language=pt-BR`;
          const params = {
            api_key: apiKey,
            page: currentPage,
          };
  
          if (searchQuery) {
            url = `https://api.themoviedb.org/3/search/tv?language=pt-BR`;
            params.query = searchQuery;
          }
  
          const response = await axios.get(url, { params });
          setSeries(response.data.results);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          console.error('Erro ao buscar serie:', error);
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
            placeholder="Pesquisar serie por nome"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
  
        {series.map((serie) => (
          <div key={serie.id}>
            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} />
            <h3>{serie.name}</h3>
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
  
  export default ListaSeries;
  
  
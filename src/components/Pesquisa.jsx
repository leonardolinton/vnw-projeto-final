import React from "react";

const Pesquisa = () => {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
      
  return (
    <input
      type="text"
      placeholder="Pesquisar serie por nome"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default Pesquisa;

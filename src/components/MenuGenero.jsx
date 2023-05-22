import React from "react";
import * as S from "../styles/MenuGeneroStyle";

const MenuGenero = () => {
  return (
    <S.Nav>
      <S.Generos>
        <li>
          <a href="">Popular</a>
        </li>
        <li>
          <a href="">Drama</a>
        </li>
        <li>
          <a href="">Ação</a>
        </li>
        <li>
          <a href="">Aventura</a>
        </li>
        <li>
          <a href="">Comédia</a>
        </li>
        <li>
          <a href="">Crime</a>
        </li>
        <li>
          <a href="">Fantasia</a>
        </li>
        <li>
          <a href="">Família</a>
        </li>
      </S.Generos>
    </S.Nav>
  );
};

export default MenuGenero;

import React from "react";
import * as S from "../styles/MainStyle";

import MenuGenero from "./MenuGenero";
import ListaFilme from "./ListaFilme" 
import Carrossel from "./Carrossel"


const Main = () => {
  return (
    <S.Main>
      <MenuGenero/>
      <Carrossel/>
      <ListaFilme/>
    </S.Main>
  );
};

export default Main;

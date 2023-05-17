import React from "react";
import * as S from "../styles/MainStyle";

import MenuGenero from "./MenuGenero";
import ListaFilme from "./ListaFilme" 


const Main = () => {
  return (
    <S.Main>
      <MenuGenero/>
      <ListaFilme/>
    </S.Main>
  );
};

export default Main;

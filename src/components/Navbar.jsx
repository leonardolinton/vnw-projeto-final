import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "../styles/NavbarStyle";
/*===== Imagens Importadas =====*/
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <S.Nav>
      <S.Logo><img src={logo} alt="Logo da Dell Filmes" /></S.Logo>
      <S.Menu>
        <S.Link>
          <NavLink
            to="/series"
            style={({ isActive }) => ({
                color: "#fff",
                padding: "10px 35px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                background: isActive ? "#747474" : "transparent",
            })}
          >
            Series
          </NavLink>
        </S.Link>
        <S.Link>
          <NavLink
            to="/"
            style={({ isActive }) => ({
                color: "#fff",
                padding: "10px 35px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                background: isActive ? "#747474" : "transparent",
              })}
          >
            Filmes
          </NavLink>
        </S.Link>
      </S.Menu>
      <S.Opcoes>
        <p>Filtro</p>
        <p>Login</p>
      </S.Opcoes>
    </S.Nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "../styles/NavbarStyle";
/*===== Imagens Importadas =====*/
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Logo>
          <img src={logo} alt="logo" />
        </S.Logo>
        <S.BtnMobile type="checkbox" id="check"></S.BtnMobile>
        <S.Hamburguer htmlFor="check"></S.Hamburguer>
        <S.Menu>
          <S.Links>
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
          </S.Links>
          <S.Opcoes>
            <p>Filtro</p>
            <p>Login</p>
          </S.Opcoes>
        </S.Menu>
      </S.Nav>
    </S.Header>
  );
};

export default Navbar;

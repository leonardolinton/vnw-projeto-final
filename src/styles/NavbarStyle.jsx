import styled from "styled-components";
import menu from "../assets/menu.png";

export const Header = styled.header`
  width: 100%;
  padding: 0 5%;
  backdrop-filter: blur(10px);
  box-shadow: 0px 3px 6px #0000005c;
  background-color: #00000050;
  opacity: 1;
  position: fixed;
  z-index: 100;
`;

export const Logo = styled.div`
  height: 6vh;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 950px) {
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 90vh;
    top: calc(10vh);
    right: -100vw;
    transition: 0.3s;

    background-color: #000000eb;
    backdrop-filter: blur(50px);
    opacity: 3;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Link = styled.li`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const BtnMobile = styled.input`
  display: none;

  &:checked ~ ul {
    right: 0;
  }
`;

export const Hamburguer = styled.label`
  display: none;

  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 5vh;
    width: 5vh;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in-out 0.3s;
    background-image: url(${menu});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Opcoes = styled.div`
    display: flex;
    gap: 50px;
    color: #fff;

    p{
        cursor: pointer;
        transition: ease-in-out 0.3s;

        &:hover{
            opacity: 0.7;
        }
    }
`
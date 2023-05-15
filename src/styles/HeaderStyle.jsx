import styled from "styled-components";
import banner from "../assets/banner.png";

export const Header = styled.header`
  width: 100%;
  position: relative;
`;

export const Menu = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  background-color: #00000050;
  opacity: 1;
  backdrop-filter: blur(10px);
`;

export const Logo = styled.div`
  height: 6vh;
  cursor: pointer;

  img {
    height: 100%;
  }
`;

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
`;

export const Opcoes = styled.div`
  display: flex;
  gap: 25px;

  button {
    padding: 10px 35px;
    border-radius: 50px;
    background-color: transparent;
    font-size: 0.875rem;
    color: #fff;
    transition: ease-in-out 0.3s;

    &:hover {
      background-color: #747474;
      box-shadow: 0px 3px 6px #0000005c;
    }
  }
`;

export const InfoMovie = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 100px;
  position: absolute;
  bottom: 0;
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;

  p {
    max-width: 570px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 150%;
  }
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1.313rem;

    span {
      font-size: 0.625rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    width: 10.938rem;
    height: 3.125rem;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #0000005c;
  }
`;

export const ButtonPlay = styled.button`
  background-color: #d53a00;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    gap: 0.5rem;
    color: #fff;
    height: 100%;
  }
`;

export const ButtonTrailer = styled.button`
  background-color: #717171;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    gap: 0.5rem;
    color: #fff;
    height: 100%;
  }
`;

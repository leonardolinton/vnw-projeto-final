import { styled } from "styled-components";

export const Nav = styled.nav`
  width: 100%;
`;

export const Generos = styled.ul`
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  overflow: auto;
  white-space: nowrap;
  background-color: #000;

  &::-webkit-scrollbar{
    height: 3px;
  }
  &::-webkit-scrollbar-track{
    background-color: #000;
  }
  &::-webkit-scrollbar-track{
    background-color: #000;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #ffffff50;
    border-radius: 3px;
  }

  li {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 1.5rem;
    text-decoration: none;
    transition: ease-in-out 0.3s;

    a {
      color: #ffff;
      padding: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
    }

    &:hover{
      opacity: 0.5;
    }
  }
`;

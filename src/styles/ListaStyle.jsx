import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 0 5%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;

  .pagination {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 10vh 0;

    a {
      font-size: 1rem;
      background: transparent;
      color: #fff;
      border: solid 1px #fff;
      padding: 1rem 1.5rem;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      @media (max-width: 950px) {
        font-size: 0.7rem;
        padding: 0.4rem 0.6rem;
      }

      &:hover,
      &:focus {
        background: #fff;
        color: #000;
      }
    }
    @media (max-width: 950px) {
      gap: 0.5rem;
    }
  }
`;

export const Titulo = styled.h2`
  color: #fff;
  margin-left: 1rem;
  padding-top: 5vh;
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  form {
    input {
      width: 15rem;
      padding: 1rem;
      margin-right: 1rem;
      height: 3rem;
      outline: none;
      border-radius: 25px;
      font-size: 1rem;
      background-color: transparent;
      color:#717171;
      border: solid 1px #fff;
      transition: ease-in-out 0.3s;

      &::placeholder {
        color: #717171;
      }

      @media (max-width: 800px) {
        width: 40vw;
        height: 2rem;
        padding: 0.5rem;
        font-size: 0.9rem;
      }
    }

    @media (max-width: 800px) {
        width: 50%;
    }
  }
`;

export const BoxLista = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;

  figure {
    position: relative;
    margin: 1rem;
    transition: ease-in-out 0.3s;

    &:hover{
        filter: grayscale(0.9);
    }

    &:hover p{
      color: #fff;
    }

    img {
      height: 100%;
      width: 100%;
    }

    h3 {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.7rem;
      margin-top: 1rem;
      
    }

    p{
      font-size: 0.8rem;
      text-align: justify;
      position: absolute;
      top: 0;
      margin: 1rem;
      color: transparent;
      transition: ease-in-out 0.3s;
    }

  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

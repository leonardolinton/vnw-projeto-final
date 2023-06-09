import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 5vh 5%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .pagination {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 10vh 0;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
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
        padding: 0.3rem 0.5rem;
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
  display: flex;
  align-items: flex-end;
  color: #fff;
  margin-left: 1rem;
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  form {
    display: flex;

    input {
      width: 15rem;
      padding: 1rem;
      margin-right: 1rem;
      height: 3rem;
      outline: none;
      font-size: 1rem;
      background-color: transparent;
      color: #fff;
      border: solid 1px #fff;
      transition: ease-in-out 0.3s;
      border-radius: 25px;

      &::placeholder {
        color: #717171;
      }

      @media (max-width: 800px) {
        width: 40vw;
        height: 2rem;
        padding: 0.5rem 1rem;
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
  gap: 0.5rem 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.figure`
    position: relative;
    margin: 1rem;
    transition: ease-in-out 0.3s;

    &:hover {
      filter: grayscale(1);
    }

    &:hover p {
      color: #fff;
    }

    img {
      width: 100%;
    }

    h3 {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.7rem;
      margin-top: 1rem;
    }

    p {
      font-size: 0.7rem;
      text-align: justify;
      position: absolute;
      top: 0;
      margin: 0.5rem;
      color: transparent;
      transition: ease-in-out 0.3s;

      @media (max-width: 1000px) {
        font-size: 0.5rem;
      }
    }

    @media (max-width: 800px) {
      margin: 0.5rem;
    }
` 

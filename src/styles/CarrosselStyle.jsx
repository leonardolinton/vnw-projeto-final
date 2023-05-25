import { styled } from "styled-components";

export const CarouselBox = styled.section`
  width: 100%;
  padding: 0 2.5%;
  color: #fff;
  background-color: #000;

  h2 {
    margin-left: 4%;
    padding-top: 5vh;
  }

  h3 {
    font-size: 0.9rem;
  }

  span {
    font-size: 0.7rem;
  }

  p {
    font-size: 0.8rem;
    text-align: justify;
    position: absolute;
    top: 0;
    margin: 0.5rem;
    color: transparent;
    transition: ease-in-out 0.3s;
  }

  figure {
    position: relative;
    transition: ease-in-out 0.3s;

    &:hover {
      filter: grayscale(0.9);
    }

    &:hover p {
      color: #fff;
    }

    img {
      height: 100%;
      width: 100%;
    }
    p{
      @media (max-width: 1000px) {
        font-size: 0.5rem;
      }
    }
  }

  .rec.rec-arrow {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 2rem;
  }
`;

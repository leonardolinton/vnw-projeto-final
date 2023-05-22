import styled from "styled-components";

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
`;

export const InfoMovie = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 100px;
  position: absolute;
  bottom: 0;
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;

  @media (max-width: 750px) {
    height: 90vh;
    padding: 5%;
    justify-content: center;
    text-align: justify;
  }
`;

export const Titulo = styled.h1`
  font-size: 3rem;
  text-shadow: #00000029 0px 3px 6px, #0000003b 0px 3px 6px;
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  div{
    display: flex;
    align-items: flex-end;
  }

  p {
    font-size: 1.313rem;
    text-shadow: #00000029 0px 3px 6px, #0000003b 0px 3px 6px;

    span {
      font-size: 0.625rem;
      text-shadow: #00000029 0px 3px 6px, #0000003b 0px 3px 6px;
    }
  }
`;

export const Sinopse = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 150%;
    max-width: 50%;
    max-height: 10rem;
    overflow-y: hidden;
    text-shadow: #00000029 0px 3px 6px, #0000003b 0px 3px 6px;
`

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

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

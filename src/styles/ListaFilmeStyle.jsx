import { styled } from "styled-components";

export const FilmesBox = styled.section`
    display:flex;
    flex-direction: column;
    padding: 5vh 0;
`
export const Title = styled.h2`
    font-size: 1.5rem;
    margin-left: 1rem;
    color: #fff;

`
export const ListaFilmes = styled.ul`
    width: 100%;
    display: grid;
    gap: 3rem 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;

    @media (max-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

export const Filme = styled.li`
    margin: 1rem;
    cursor: pointer;
    transition: ease-in-out 0.3s;

    &:hover{
        filter: grayscale(0.7);
    }

    img{
        width: 100%;
    }

    h3{
        font-size: 0.80rem;
        color: #fff;
    }
`
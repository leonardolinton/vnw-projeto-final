import styled from "styled-components";

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  padding: 0 5%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00000050;
  opacity: 1;
  backdrop-filter: blur(10px);
  box-shadow: 0px 3px 6px #0000005c;
  text-align: justify;
  z-index: 100;

  @media (max-width: 950px){
      height: 15vh;
    }

`;

export const Logo = styled.div`
  height: 6vh;
  cursor: pointer;

  img {
    height: 100%;
  }
`;

export const Menu = styled.ul`
    display: flex;

    @media (max-width: 950px){
      flex-direction: column;
    }

    @media (max-width: 950px){
      gap: 1rem;
    }
`

export const Link = styled.li`
    padding: 10px;
    border-radius: 50px;
    background-color: transparent;
    font-size: 0.875rem;
    color: #fff;
    transition: ease-in-out 0.3s;
`

export const Opcoes = styled.div`
    display: flex;
    gap: 35px;
    color: #fff;

    p{
        cursor: pointer;
        transition: ease-in-out 0.3s;

        &:hover{
            opacity: 0.7;
        }
    }

    @media (max-width: 950px){
      display: none;
    }
`
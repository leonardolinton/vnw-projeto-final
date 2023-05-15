import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    button{
        cursor: pointer;
    }
`
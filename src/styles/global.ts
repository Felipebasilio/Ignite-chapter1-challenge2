import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* font-size: o padrão é 16px; */

    html {
        /* REM = 1rem = 16px */
        /* Dessa forma a acessibilidade funciona bem :-moz-placeholder, pois com a porcentagem mesmo se o usuário setar o font size do device pra mais ou menos esse ajuste será proporcional */
        @media (max-width: 1080px) {
            font-size: 93.75%;  //15px
        }
        
        @media (max-width: 720px) {
            font-size: 87.5%;  //14px
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
        /* A fonte fica mais nítida */
    }

    body, input, textarea, button {
        /* usamos a estilização de fonte nesses 4 elementos pois eles por padrão não herdam a fonte do componente pai. Possuem a sua própia */
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`;

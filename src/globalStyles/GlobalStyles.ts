import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin:  0;
        font-family: 'League Spartan', sans-serif;
    }

    body {
        min-height: 100vh;
        width: 100vw;
        background-color: hsl(180, 52%, 96%); 
        overflow-x: hidden;
        padding-bottom: 2rem;
    }

    p {
        color: #7b8e8e;
    }

`
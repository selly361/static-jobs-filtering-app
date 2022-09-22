import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin:  0;
    }

    body {
        min-height: 100vh;
        width: 100vw;
        background-color: hsl(180, 52%, 96%);
        padding-bottom: 1rem;
    }

`
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(255, 255, 255, 0.3);
    }

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

`;

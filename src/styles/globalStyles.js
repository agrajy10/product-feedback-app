import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
    }

    body {
        font-family:Jost, sans-serif;
        font-size:1rem;
        line-height:1.43;
        background-color:${({ theme }) => theme.bg};
        color:${({ theme }) => theme.color}
    }

    .body2 {
        font-size:0.9375rem;
        line-height:1.46;
    }

    .body3 {
        font-size:0.8125rem;
        font-weight:600;
        line-height:1.46;
    }

    h1,h2,h3,h4,.h1,.h2,.h3,.h4 {
        line-height:1.45;
    }

    h1,.h1 {
        font-size:1.5rem;
        letter-spacing:-0.33px;
    }

    h2,.h2 {
        font-size:1.25rem;
        letter-spacing:-0.25px;
    }

    h3,.h3 {
        font-size:1.125rem;
        letter-spacing:-0.25px;
    }

    h4,.h4 {
        font-size:0.875rem;
        letter-spacing:-0.2px;
    }

    .sr-only {
        border: 0px;
        clip: rect(0px, 0px, 0px, 0px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        overflow-wrap: normal;
    }

`;

export default GlobalStyle;

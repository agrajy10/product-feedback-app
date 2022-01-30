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
        font-size:24px;
        letter-spacing:-0.33px;
    }

    h2,.h2 {
        font-size:20px;
        letter-spacing:-0.25px;
    }

    h3,.h3 {
        font-size:18px;
        letter-spacing:-0.25px;
    }

    h4,.h4 {
        font-size:14px;
        letter-spacing:-0.2px;
    }

`;

export default GlobalStyle;

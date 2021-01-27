import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: "Open Sans";
    src: url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7;
        color: #777777;
        padding: 30px;
    }
`;
 
export default GlobalStyle;
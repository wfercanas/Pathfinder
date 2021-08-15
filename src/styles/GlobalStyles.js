import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --r400: #de350b;
    --r500: #bf2600;
    --g200: #57d9a3;
    --b200: #2684ff;
    --b400: #0052cc;
    --n10: #fafbfc;
    --n40: #dfe1e6;
    --n100: #7a869a;
    --n200: #6b778c;
    --n400a: rgba(9, 30, 66, 0.71);
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  * {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  p,
  a,
  span,
  button,
  li {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #map,
  #root {
    width: 100vw;
    height: 100vh;
  }

  #map {
    position: absolute;
    top: 0;
  }

  #root {
    display: flex;
    justify-content: center;
  }

`;

export { GlobalStyles };

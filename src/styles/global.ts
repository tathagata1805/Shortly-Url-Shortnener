import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background.white};
    color: ${props => props.theme.colors.neutral.grayishViolet};
    font: 500 18px Poppins, sans-serif;
    overflow-x: hidden;
  }

  button {
    outline:none;
    cursor: pointer;
  }

  button:hover {
    filter: saturate(70%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.1);
  }
`

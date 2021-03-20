import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#f9f9f9",
  highlight: "#ffffff",
  fontColor: "#18191A",
  shadow: "#737373",
  brightest: "#fff",
  darkest: "#000",
  textHighlight: "#000",
  primaryColor: "#079A3D",
  secondaryColor: "#f4b717",
  grey: "#e5e5e5"
}

export const darkTheme = {
  body: "#131414",
  fontColor: "#d0d0d0",
  shadow: "#080808",
  highlight: "#242727",
  textHighlight: "#fff",
  darkest: "#fff",
  brightest: "#131414",
  primaryColor: "#034d1e",
  secondaryColor: "#614909",
  grey: "#151617"
}

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body};
    /* color: ${props => props.theme.fontColor}; */
    color: ${props => props.isTourOpen ? "rgba(0, 0, 0, .5)" : props.theme.fontColor};
    transition: background-color 1s ease;
  }

  .ActiveMenuItem{
    background-color: ${props => props.theme.body};
  }
`;
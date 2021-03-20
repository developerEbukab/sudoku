import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-color: red; */

  @media only screen and (max-width: 37.5em) {
  };
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: 20% 1fr;
  /* background-color: red; */

  @media only screen and (max-width: 37.5em) {
  };
`;
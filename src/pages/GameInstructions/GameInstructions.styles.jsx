import styled from "styled-components";

export const GameInstructionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 68% 30%;
  grid-column-gap: 2%;
  /* flex-direction: column;
  justify-content: center; */
  /* align-items: center; */
  /* position: relative; */
  overflow-y: scroll;
  padding:  2rem;

  @media only screen and (max-width: 37.5em) {
  };
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* height: 80vh; */

  img{
    width: 100%;
    /* height: 100%; */
  }

  @media only screen and (max-width: 37.5em) {
  };
`;

export const InstructionContainer = styled.div`
  margin-top: 2rem;
  
  h3{
    margin-bottom: 1rem;
  }

  img{
    width: 100%;
    /* height: 100%; */
  }

  @media only screen and (max-width: 37.5em) {
  };
`;
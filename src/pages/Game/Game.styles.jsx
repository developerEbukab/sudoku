import styled from "styled-components";

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 37.5em) {
  };
`;

export const ResultText = styled.h2`
  color: ${props => props.theme.primaryColor};
`

export const SudokuContainer = styled.div`
  width: 35vw;
  height: 35vw;
  /* background-color: blue; */
  margin-bottom: 1vw;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 5px solid ${props => props.theme.primaryColor};

  .styleRightBorder{
    border-right: 5px solid ${props => props.theme.primaryColor};
  }

  .styleBottomBorder{
    border-bottom: 5px solid ${props => props.theme.primaryColor};
  }

  .UnEditableBox{
    /* background-color: ${props => props.theme.shadow}; */
    font-weight: bold;
    font-size: 4rem;
    cursor: not-allowed;
    pointer-events: none;
    color: ${props => props.theme.primaryColor};

    &:hover{
      background-color: ${props => props.theme.body};
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  .SelectedInputBox{
    background-color: ${props => props.theme.primaryColor};
  }

  p{
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;

    &:hover{
      background-color: ${props => props.theme.primaryColor};
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 37.5em) {
  };
`;

export const InputsContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  p{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vw;
    border: 1px solid grey;
    font-size: 3rem;
    transition: .2s all ease-in;
    
    &:hover{
      -webkit-box-shadow:inset 0px 0px 0px 3px ${props => props.theme.primaryColor};
      -moz-box-shadow:inset 0px 0px 0px 3px ${props => props.theme.primaryColor};
      box-shadow:inset 0px 0px 0px 3px ${props => props.theme.primaryColor};
      color: ${props => props.theme.primaryColor};
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 37.5em) {
  };
`;

export const ControlsContainer = styled.div`
  margin-left: 3rem;
  height: 39vw;
  /* width: 15vw; */
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 37.5em) {
  };
`;

export const Button = styled.button`
  width: 15vw;
  height: 3.9vw;
  background-color: ${props => props.color === "primary" ? props.theme.primaryColor : props.theme.secondaryColor};
  margin-bottom: 1rem;
  transition: .2s all ease-in;

  &:hover{
    cursor: pointer;
    opacity: .9;
    transform: scale(.95);
  }

  @media only screen and (max-width: 37.5em) {
  };
`;

export const Modal = styled.div`
  position: absolute;
  background-color: ${props => props.theme.body};;
  height: 100%;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  @media only screen and (max-width: 37.5em) {
  };
`;

export const GameContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  justify-items: center;
  align-items: center;
  /* height: 100%; */

  @media only screen and (max-width: 37.5em) {
  };
`;

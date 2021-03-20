import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  /* border-bottom: 1rem solid darken(#000, 10%); */

  i{
    font-size: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
  };
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  text-transform: uppercase;
  color: $color-primary;
  font-weight: bold;

  img{
    margin: 0 .4rem;
  }

  @media only screen and (max-width: 37.5em) {
  };
`;

export const DocumentButton = styled.p`
  transition: .2s all;
  color: $color-primary;

  &:hover{
    color: darken($color: $color-primary, $amount: 20);
    cursor: pointer;
  }

  @media only screen and (max-width: 37.5em) {
  };
`;
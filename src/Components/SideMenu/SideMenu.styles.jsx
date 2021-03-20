import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.grey};

  @media only screen and (max-width: 37.5em) {
  };
`; 

export const RecordTimeContainer = styled.div`
  width: 100%;
  height: 30%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 37.5em) {
  };
`;

export const MenuItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.body};
  border-top: 1px solid ${props => props.theme.body};
  display: flex;
  align-items: center;
  padding : 1.5rem 0 1.5rem 3rem ;
  /* margin-bottom: .2rem; */
  transition: all .2s ease;
  background-color: ${props => props.isActive && props.theme.body };
  border-left:  ${props => props.isActive && `5px solid ${props.theme.primaryColor}`};

  &:hover{
    /* background-color: ${props => props.theme.body}; */
    cursor: pointer;
    border-left: 5px solid ${props => props.theme.primaryColor};
  }

  p{
    margin-left: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
  };
`;
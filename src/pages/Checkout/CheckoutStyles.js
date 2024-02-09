import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  @media only screen and (min-width: 320px) and (max-width: 425px){
    aling-items: center;
    justify-content:center;
    flex-direction:column-reverse;
  }
  
`;

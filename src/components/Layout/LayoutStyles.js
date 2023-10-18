import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: black;
  
  /* Adapt Celular*/

  @media (min-width: 320px) and (max-width: 425px) {
   width: 170vw;
    
  }

`;

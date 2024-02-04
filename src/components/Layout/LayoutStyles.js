import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background: black;
 
  @media only screen and (min-width: 320px) and (max-width: 425px){
    object-fit:cover;
    min-width: min-content;
    width:100%;
  }

`;

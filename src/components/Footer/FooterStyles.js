import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 2rem 0;
  background-color:black;
  
  

  p span {
    text-align: center;
    justify-content: center;
    font-size: 14px;
    font-family: monospace;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-white);
    margin-top: 50px;
  

    text-shadow:
        0 0 5px rgba(254,120,33,1),
        0 0 10px rgba(254,120,33,1),
        0 0 20px rgba(254,120,33,1),
        0 0 40px rgba(254,120,33,1),
        0 0 80px rgba(254,120,33,1),
        0 0 90px rgba(254,120,33,1),
        0 0 100px rgba(254,120,33,1),
        0 0 140px rgba(254,120,33,1),
        0 0 180px rgba(254,120,33,1);

  }
`;

export const LinksContainerStyled = styled.div`
  margin-bottom: 2rem;
  /* Adapt Celular*/ 
  @media (min-width: 320px) and (max-width: 425px){
    display: none
  }
`;

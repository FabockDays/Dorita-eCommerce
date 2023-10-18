import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 27vh;
    background: #fe7821 ;
   

    img {
      display: flex;
        width: 20vw;
        height: 30vh;
    }

    /* Adapt Telefono celular*/
    @media (min-width: 320px) and (max-width: 425px) {
      width: 170vw;
       img {
         width:50vw;
       }
    }

   
  
    
`;
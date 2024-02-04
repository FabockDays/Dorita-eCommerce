import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px; /* Ajusta la altura según tus necesidades */
  background-color:rgb(254, 120, 33);

  

  img {
    width: 100%;
    height: auto;
    max-width: 200px; /* Ajusta el ancho máximo de la imagen según tus necesidades */
  }

  @media only screen and (min-width: 320px) and (max-width: 425px){ 
    height:190px;
     
  }

  @media (min-width: 768px) {
    /* Estilos para tablets */
    flex-direction: row;
    height: 160px; /* Ajusta la altura según tus necesidades */
  }

  @media (min-width: 1024px) {
    /* Estilos para computadoras */
    height: 180px; /* Ajusta la altura según tus necesidades */
  }
`;
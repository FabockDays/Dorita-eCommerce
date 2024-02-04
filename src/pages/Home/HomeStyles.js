import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vw;
  margin: auto;
  background: black;
  align-items: center;
  justify-content:center;

 


  .ref{
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
    background-image: linear-gradient(45deg,#365899 0%,#992a09 35%,#a76c51 85%,#a76c51 100%);
    -webkit-text-fill-color: transparent;
	  -webkit-background-clip: text;
    color:#fff;
    max-width: 400px;
    font-size: 25px;
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 8rem;
  
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
  
  
`;

export const RecomendadosWrapper = styled.section`
  margin-top: 5rem;
  width: 100%;

  h2 {
    font-weight: 400;
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;

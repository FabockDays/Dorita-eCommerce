import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  @media only screen and (min-width: 320px) and (max-width: 425px){
    width:80%;
    margin-left:50px;
  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  
  width: 80%;
  height: 440px;
  margin: 0 auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
 

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  color:#fff;
  background-image: linear-gradient(45deg,#365899 0%,#992a09 35%,#a76c51 85%,#a76c51 100%);
  -webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
  color:#fff;
  font-size: 25px;

`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: #ff7a00;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  border-color: #fe7821;
 
  
`;

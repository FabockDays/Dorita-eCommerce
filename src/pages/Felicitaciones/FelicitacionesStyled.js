import styled from 'styled-components';




export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
  margin-top: 25px;
  @media only screen and (min-width: 320px) and (max-width: 425px){
    margin-top: 30px;
    height: calc(85vh - 100px);
    .congrats{
      width:100%;
    }
 
  }
`;

export const TitleStyled = styled.h1`
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
  }
`;



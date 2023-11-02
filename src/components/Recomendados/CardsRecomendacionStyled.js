import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  padding: 1rem;
  overflow: scroll;
  cursor: pointer;
  

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    
    
  }

  &::-webkit-scrollbar-thumb {
    background: #fe7821;
    border-radius: 5px;
    
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 270px;
  width: 150px;
  margin-bottom: 25px;
  padding: 0.5rem 0.7rem;
  background: var(--gray-bg);
  border-radius: 15px;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #ffa100;
  }
`;

export const CardImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
 
`;

export const CardImg = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 16px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardImgContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const CardText = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  height: 32%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 15px  ;

  ${CardImgContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-weight: 200;
  padding:0.3rem;
  letter-spacing: 0.02rem;
  overflow: hidden;
`;



export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;



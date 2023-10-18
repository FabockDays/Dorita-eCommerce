import styled from 'styled-components';

export const TallesContainer = styled.div`
  
  display : flex;
  margin-top: 10px;

  h2{ 
    font-weight: 90;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
    background-image: linear-gradient(45deg,#365899 0%,#992a09 35%,#a76c51 85%,#a76c51 100%);
    -webkit-text-fill-color: transparent;
	  -webkit-background-clip: text;
    color:#fff;
    max-width: 90px;
    font-size: 14px;
    margin-left : 50px;
  }
`

export const CardsContainer = styled.div`
display: grid;
place-items: center;
justify-content: center;
grid-template-columns: repeat(auto-fit, 400px);
row-gap: 3.5rem;
width: 100%;
padding: 1rem 0;


`;

export const Card = styled.div`
background: var(--gray-bg);
width: 300px;
margin-top: 30px;
border-radius: 15px;
padding: 1rem;
img {
  width: 100%;
  height: 320px;
  margin-bottom: 1rem;
  border-radius: 15px;
  transition: 0.4s;
}

img:hover{

  transform: scale(1.1 );
}

h2 {
  font-weight: 600;
  margin: 0;
}
p {
  color: #666;
  font-size: 1.2rem;
}
`;

export const CardImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
 
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardImgContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const CardText = styled.div`
  position: absolute;
  top: 250px;
  left: 0;
  width: 50%;
  height: 22%;
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
  font-size: 1.75rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;



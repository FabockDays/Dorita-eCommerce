import styled from 'styled-components';

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


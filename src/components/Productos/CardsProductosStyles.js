import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
  background: black;
`;

export const ProductosCard = styled.div`
  background: var(--gray-bg);
  width: 300px;
  
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

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

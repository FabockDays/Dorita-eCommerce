import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
  position: relative;
  background-color:black;
  flex-direction:row;

  /* Adapt Telefono celular*/
  @media (min-width: 320px) and (max-width: 425px) {
    gap: 5px;
    max-width: 100%; /* El ancho máximo es el 100% del contenedor padre */
    box-sizing: border-box;
 
    
  }
  
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
  padding: 2rem 0.5rem;
  

  /* Adapt Telefono celular*/
  @media (min-width: 320px) and (max-width: 425px) {
    gap:0px;
    padding:0px;
    box-sizing: border-box;
  }

  
  @media (max-width: 1024px) {
    /* Estilos para Tablets */
    width: 60px;
    height: 75px;
  }

  background-color: ${({ selected }) =>
    selected ? 'var(---bg)' : 'var(--gray-bg)'};
  border-radius: 15px;
  cursor: pointer;



  h2 {
    font-size: 0.7rem;
   
  }
  img{
    width: 60px;
    height: 60px;

    @media (min-width: 320px) and (max-width: 425px){
      width: 40px;
      heigth:40px;
      
      
    }

    @media (max-width: 1024px) {
      margin-top: 10px;
    }
  }

 
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: #fe7821;
  border-radius: 15px;

  @media (max-width: 1024px) {
   visibility: hidden;
  }
`;

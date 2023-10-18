import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
  position: relative;

  /* Adapt Telefono celular*/
  @media (min-width: 320px) and (max-width: 425px) {
   gap: 7px;
   margin-right: 20px;
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

  @media (max-width: 1024px) {
    /* Estilos para Tablets */
    width: 60px;
    height: 75px;
  }

  background-color: ${({ selected }) =>
    selected ? 'var(--orange-bg)' : 'var(--gray-bg)'};
  border-radius: 15px;
  cursor: pointer;



  h2 {
    font-size: 1rem;
  }
  img{
    width: 60px;
    height: 60px;
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

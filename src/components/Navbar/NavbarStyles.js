import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;

  
`;

export const FollowUsContainerStyled =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 80px;
  

  
  
  .sign-wrap .sign_word{
    font-size: 12px;
    font-weight: bold;
    line-height: 50px;
    color: #FFF;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
    
  }

  .sign-wrap .sign_word span {
    animation: neon linear infinite 2s;
    
  }

  @keyframes neon {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #0b3960;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #0b3960;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #0b3960;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }

  img{
    width: 50px;
    height: 50px;
  }

  img:hover{
    filter: saturate(200%);
  }

   /* Estilos para Tablets */

  @media (max-width: 1024px) {
    gap: 30px;
    

    .sign-wrap .sign_word {
      font-size: 10px; 
      line-height: 40px;
      
    }

    img {
      width: 35px; 
      height: 35px;
    }
  }

  
 
`

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const OfferButtonStyled = styled.a`
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  border-radius: 1rem;
  border: 2px solid #fe7821;
  
  /* Adapt Telefono celular}*/
  @media (min-width: 320px) and (max-width: 425px){
    padding: 0.3rem 0.5rem;
    margin-left: 15px;
    
  }

  a {
  position: relative;
  display: inline-block;
  color: White;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}

a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fe7821;
  transform-origin: top;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a:hover::before {
  transform: scaleX(1);
}

`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
  
  

  a {
    padding: 0.4rem 1.5rem;
    
  }

  a:first-child {
    background: gray;
    border-radius: 1rem;
    border: 2px solid #fe7821;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    /* Adapt Telefono celular*/
    @media (min-width: 320px) and (max-width: 425px){
      width: 25px;
      height:15px;
      margin-left: 10px;
   }
  }
`;

export const LinkContainerStyled = styled.div`
  margin-top: 2px;
  font-size: 1.4rem;
  color: ${props => (props.home ? '#fe7821' : '#fe7821')};

  
  
  
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;


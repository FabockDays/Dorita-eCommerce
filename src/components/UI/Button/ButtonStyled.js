import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: 2px solid #fe7821 ;
  border-radius: ${({ radius }) => `${radius}px`};
  background: gray;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    opacity: 95%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #252525;
      & span {
        background: var(--btn-gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `}
`;

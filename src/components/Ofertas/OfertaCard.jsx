import React, { useState } from 'react'
import Button from '../UI/Button/Button';
import {
  Card,
  CardImg,
  CardImgContainer,
} from './OfertasStyled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardRecomendacion = ({ title, desc, price, img, id }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  return (

    
    <Card
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardImgContainer>
        <CardImg src={img} alt={title} isHovered={isHovered} />
        
      </CardImgContainer>
      <Button onClick={() => dispatch(addToCart({ title, desc, price, img, id }))}>Agregar</Button>
      
    </Card>
  );
};

export default CardRecomendacion;
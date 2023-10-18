import React, { useState } from 'react';
import { formatPrice } from '../../utils/index';
import Button from '../UI/Button/Button';
import {
  Card,
  CardImg,
  CardImgContainer,
  CardPrice,
  CardText,
  CardTitle,
  TallesContainer,
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
        <CardText style={{ opacity: isHovered ? 1 : 0, visibility: isHovered ? 'visible' : 'hidden' }}>
          <CardTitle>{title}</CardTitle>
          
          <CardPrice>{formatPrice(price)}</CardPrice>
        </CardText>
      </CardImgContainer>
      <Button onClick={() => dispatch(addToCart({ title, desc, price, img, id }))}>Agregar</Button>
      <TallesContainer><h2> Talle : Unico (M) </h2></TallesContainer>
    </Card>
  );
};

export default CardRecomendacion;
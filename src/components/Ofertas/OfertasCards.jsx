import React from 'react';

import CardRecomendacion from './OfertaCard';

import { CardsContainer} from './OfertasStyled';
import { useSelector } from 'react-redux';

const CardsRecomendacion = () => {
  const offersProducts = useSelector(
    state => state.offers.offers
  );
  return (
   
    <CardsContainer gridLength={8}>
      {offersProducts.map(product => (
        <CardRecomendacion key={product.id} {...product} />
      ))}
      
    </CardsContainer>
  );
};

export default CardsRecomendacion;

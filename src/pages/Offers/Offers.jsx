import React, { useState } from 'react';
import CardsRecomendacion from '../../components/Ofertas/OfertasCards';
import { ProductosWrapper } from '../Home/HomeStyles';
import { OfertasStyled } from './OffersStyles';






const Offers = () => {
  return (
    <ProductosWrapper>
      <OfertasStyled> Las mejores ofertas hasta agotar stock !! </OfertasStyled>
      <CardsRecomendacion/>
        
    </ProductosWrapper>
    

  )

}


export default Offers;


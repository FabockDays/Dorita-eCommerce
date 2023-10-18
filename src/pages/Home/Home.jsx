import React, { useRef } from 'react';

import Categorias from '../../components/Categorias/Categorias';
import CardsProductos from '../../components/Productos/CardsProductos';
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';
import Hero from '../../components/Hero/Hero';

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from './HomeStyles';


function Home() {
  const productsRef = useRef()

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y,
    )
  }

  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero doScroll={doScroll}/>
      
      
      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h2 class="ref">Algunos de nuestros productos</h2>
        <CardsRecomendacion />
      </RecomendadosWrapper>

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2 class="ref">Categorias</h2>
        <Categorias />
        
      </CategoriasWrapper>

      {/* Populares Section*/}
      <ProductosWrapper ref={productsRef}>
        <h2  class="ref">Nuestros productos</h2>
        <CardsProductos />
        
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;


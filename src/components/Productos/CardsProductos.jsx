import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const totalProducts = useSelector(state => state.products.totalProducts);

  if (selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory],
    };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([_categery, clotes]) =>
          clotes.map(product => {
            if (limit >= product.id || selectedCategory) {
              return <CardProducto key={product.id} {...product} />;
            } else return null;
          })
        )}
      </ProductosContainer>

      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={limit === INITIAL_LIMIT}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => {
              if (limit + INITIAL_LIMIT < totalProducts - 8) {
                setLimit(prevLimit => prevLimit + INITIAL_LIMIT);
              } else {
                setLimit(totalProducts - 8);
              }
            }}
            disabled={limit >= totalProducts - 8}
          >
            Ver más
          </Button>

        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;

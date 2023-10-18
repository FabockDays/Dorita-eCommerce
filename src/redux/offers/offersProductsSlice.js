import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/Products';

// Obtén los últimos 8 IDs de la categoría "productos"
const last8ProductIds = products.slice(-8).map(product => product.id);

const initialState = {
  offers: last8ProductIds.map(id => {
    // Encuentra el producto correspondiente al ID y crea un nuevo objeto recomendado
    const product = products.find(p => p.id === id);
    return { ...product };
  }),
};

export const offersProductsSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    randomOffers: state => state,
  },
});

export const { randomOffers } = offersProductsSlice.actions;

export default offersProductsSlice.reducer;

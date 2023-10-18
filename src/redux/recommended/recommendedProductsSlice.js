import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/Products';

const numProductsToSelect = products.length - 8;

const initialState = {
  recommended: Array(8)
    .fill(0)
    .reduce((acc, _item) => {
      const IDs = acc.map(valor => valor.id);
      let newRecommended;
      do {
        newRecommended = {
          ...products[Math.floor(Math.random() * numProductsToSelect)],
        };
      } while (IDs.includes(newRecommended.id));
      return [...acc, newRecommended];
    }, []),
};

export const recommendedProductsSlice = createSlice({
  name: 'recommended',
  initialState,
  reducers: {
    randomRecommended: state => state,
  },
});


export const { randomRecommended } = recommendedProductsSlice.actions;

export default recommendedProductsSlice.reducer;



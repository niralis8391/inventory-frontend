import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './category-slice';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import orderSlice from './order-slice'
import suggessionSlice from './suggest-slice'


const store = configureStore({
    reducer: { category: categorySlice, ui: uiSlice, cart: cartSlice, order: orderSlice, suggession: suggessionSlice }
});

export default store;
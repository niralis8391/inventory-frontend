import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: "order",
    initialState: {
        items: null,
        totalAmount: 0
    },
    reducers: {
        placeOrder(state, action) {
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount
        }
    }
});


export const orderAction = orderSlice.actions;

export default orderSlice.reducer;
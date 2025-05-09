import { createSlice } from '@reduxjs/toolkit';


const savedCart = JSON.parse(localStorage.getItem('cart')) || [];


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: savedCart,
        totalAmount: savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item._id === newItem._id);

            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1
                });
            } else {
                existingItem.quantity += 1;
            }

            state.totalAmount += newItem.price;
        },

        removeItem(state, action) {
            const itemToRemove = action.payload;
            const existingItemIndex = state.items.findIndex(item => item._id === itemToRemove._id);

            if (existingItemIndex !== -1) {
                const existingItem = state.items[existingItemIndex];

                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items.splice(existingItemIndex, 1);
                }

                state.totalAmount -= existingItem.price;
            }
        },

        cleaneCart(state) {
            localStorage.removeItem("cart")
            state.items = [];
            state.totalAmount = 0
        }

    }
})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;